import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
    selector: 'app-signup-component',
    templateUrl: './signup-component.component.html',
    styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    data: any = {
        email: ""
    }
    constructor(public af: AngularFire) {
        // this.items = af.database.list('/users');
        // this.items.subscribe(item => {console.log(item)})
        // this.af.auth.subscribe(auth => console.log("auth",auth));

    }

    ngOnInit() {
    }

    // logOut() {
    //     this.af.auth.logout();
    // }

    signUp() {
        this.af.auth.createUser({ email: this.data.email, password: this.data.pass })
            .catch((error: any) => {
                console.log(error);
            })
            .then((users: any) => {
                this.af.database.object('/users/' + users.uid).set(this.data);
                console.log(users);
            });
    }
}
