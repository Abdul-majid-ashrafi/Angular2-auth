import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


@Injectable()
export class MainServiceService {
userData:any;
userResume: any;
userProfile: any;
  constructor(private af : AngularFire) {
      // For Resume
         this.userResume = af.database.object('/userPost/' + localStorage.getItem("key"));
         this.userResume.subscribe(item => {console.log("User Get DaTA ",item)})
    // For user Profile
            this.userProfile = af.database.object('/users/' + localStorage.getItem("key"));
            this.userProfile.subscribe(item => {console.log("User Get Profile ",item)})
  // For add data on firebase
            this.userData =  this.af.database.object('/userPost/' + localStorage.getItem("key"))
   }




addUserData(value: any) {
    console.log("Inside Service: ", value )
    this.userData.set(value);
            console.log(localStorage.getItem("key"))

  }

}
