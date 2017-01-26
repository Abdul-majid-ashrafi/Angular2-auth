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

    // loginFacebook() {
    //     this.af.auth.login({
    //         provider: AuthProviders.Facebook,
    //         method: AuthMethods.Popup
    //     });
    // }
    // loginGoogle() {
    //     this.af.auth.login({
    //         provider: AuthProviders.Google,
    //         method: AuthMethods.Popup
    //     });
    // }
    login() {
        this.af.auth.login({
            email: this.data.email,
            password: this.data.pass
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            });



        this.af.auth.subscribe(user => {
            // console.log(data.uid)
            if (user && user.uid) {
                // console.log(data.uid);
                //     _self.UserFirebaseObservable = 
             let dat =    this.af.database.object(`/users/${user.uid}` )
                 let a = Rx.Observable.from(dat)
                    .subscribe(data => {
                        localStorage.setItem("key",data.$key)
                        console.log(data)
                        //       //_self.UserObservable.next(data);
                        //       _self.store.dispatch({ type: ActionType.User, payload : data });
                    });
            } else {

                //     //_self.UserObservable.next(null);
                //     _self.store.dispatch({ type: ActionType.User, payload : null });
            }
        })
        // this.router.navigate(['/home']);

    }

}
