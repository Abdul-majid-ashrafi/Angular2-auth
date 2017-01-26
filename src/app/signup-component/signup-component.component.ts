import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

export const UserType = {
    Compony: "Compony",
    Student: "Student"
}

@Component({
    selector: 'app-signup-component',
    templateUrl: './signup-component.component.html',
    styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
    myForm: FormGroup;
    userType = UserType;

    constructor(public af: AngularFire, public router: Router, private fb: FormBuilder) {

        this.myForm = fb.group({
            'FirstName': [''],
            'LastName': [''],
            'Email': [''],
            'Gender': [''],
            'Password': [''],
            // 'Student': [''],
            'AccountType': [''],
            'Company': [''],
        });
        // this.items = af.database.list('/users');
        // this.items.subscribe(item => {console.log(item)})
        // this.af.auth.subscribe(auth => console.log("auth",auth));
    }

    ngOnInit() {
    }

    signUp(value: any):void {        
        this.af.auth.createUser({ email: value.Email, password: value.Password })
            .catch((error: any) => {
                console.log(error);
            })
            .then((users: any) => {
                delete value.Password;
                this.af.database.object('/users/' + users.uid).set(value);
                localStorage.setItem("key",users.uid)
                console.log(users);
                this.router.navigate(['/home']);
            });
    }
}
