import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
// import { Rx } from 'rxjs';
var Rx = require('rxjs')
@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
    data: any = {
        email: ""
    }
    constructor(public af: AngularFire, private mainService: MainServiceService, public router: Router) {
        // this.af.auth.subscribe(auth => console.log("Login", auth));
    }

    ngOnInit() {
    }
    
    login() {
        this.af.auth.login({
            email: this.data.email,
            password: this.data.pass
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            })
            .catch((error: any) => {
                console.log(error);
              })
          .then((user: any) => {
        console.log(user.uid);
     localStorage.setItem("key",user.uid)
    this.router.navigate(['/home']);
      });
      

    }

}
