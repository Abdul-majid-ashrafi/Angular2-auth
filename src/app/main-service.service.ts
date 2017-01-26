import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


@Injectable()
export class MainServiceService {
userData:any;
jobData:any;
userProfile: any;
allUsers: any;
  constructor(private af : AngularFire) {
            //   For Resume get
        //  this.userResume = af.database.object('/userPost/' + localStorage.getItem("key"));
            // For Profile
            this.userProfile = af.database.object('/users/' + localStorage.getItem("key"));
            // For Resume
            this.userData =  this.af.database.object('/userPost/' + localStorage.getItem("key"))
            // For jobs
            this.jobData =  this.af.database.list('/jobPost');
            // For allUsers
            this.allUsers =  this.af.database.list('/users')
   }




jobPost(value: any) {
value.company = localStorage.getItem("key")
    this.jobData.push(value);
  }


addUserData(value: any) {
    this.userData.set(value);
     console.log(localStorage.getItem("key"))

  }

}
