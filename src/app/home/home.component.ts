import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
// import { Rx } from 'rxjs';
var Rx = require('rxjs')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any
  name: any
  constructor(private af: AngularFire, public router: Router) {

    this.items = af.database.object(`/users/${localStorage.getItem("key")}`);
    this.items.subscribe(item => {
    this.name = item.FirstName + " " + item.LastName;
      console.log(item)
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
