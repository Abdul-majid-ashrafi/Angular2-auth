import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
// import { firebase} from 'firebase';


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
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }


  signUp() {
    // console.log(this.data.email)
    // console.log(this.data.pass)
    this.af.auth().createUserWithEmailAndPassword(this.data.email, this.data.pass)
      .catch((error: any) => {
        console.log(error);
      })
      .then((users: any) => {
        console.log(users);
        firebase.database().ref("user/" + users.uid).set(this.data);
      });
  }
}
