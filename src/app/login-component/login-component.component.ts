import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
    data: any = {
        email: ""
    }
    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log("Login", auth));
    }

    ngOnInit() {
    }

    loginFacebook() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    }
    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
    }
    login() {
        this.af.auth.login({
            email: this.data.email,
            password: this.data.pass
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            });
    }

}
