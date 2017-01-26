import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any
  constructor(private af: AngularFire, public router: Router) {
    this.items = af.database.list('/users');
    this.items.subscribe(item => {
      console.log(item)

      // this.items.map((item) => { console.log("item", item) })

    })
    // this.af.auth.subscribe(auth => console.log("auth",auth));

  }

  ngOnInit() {
  }

  logOut() {
    this.af.auth.logout();
    localStorage.removeItem("key")
    this.router.navigate(['/login']);

  }
}
