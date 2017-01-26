import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


export const UserType = {
    Company: "Company",
    Student: "Student"
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any
obj : any = {
    // name: ""?
}
  constructor(private af: AngularFire, public router: Router) {

    this.items = af.database.object(`/users/${localStorage.getItem("key")}`);
    this.items.subscribe(item => {
    this.obj = {
        name : item.FirstName + " " + item.LastName,
        mail: item.Email,
        type : item.AccountType
    }    
    // console.log(this.obj.type)
    })
  }

  ngOnInit() {
  }

  logOut() {
    this.af.auth.logout();
    localStorage.removeItem("key")
    this.router.navigate(['/login']);
  }
}
