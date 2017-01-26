import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { MainServiceService } from './main-service.service';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserGetResumeComponent } from './user-get-resume/user-get-resume.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobPostGetComponent } from './job-post-get/job-post-get.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';


// Must export the config for firebase
export const firebaseConfig = {
apiKey: "AIzaSyCuhcID8gtRwWtzUpz0DbmhELdbxjdT0aM",
    authDomain: "marathonzerolevel.firebaseapp.com",
    databaseURL: "https://marathonzerolevel.firebaseio.com",
    storageBucket: "marathonzerolevel.appspot.com",
    messagingSenderId: "899901872944"
};

// for routing
const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add/resume', component: UserComponent },
  { path: 'get/resume', component: UserGetResumeComponent },
  { path: 'company/job', component: JobPostComponent },
  { path: 'get/job', component: JobPostGetComponent },
  { path: 'all_Users', component: GetAllUsersComponent },
  { path: '**', component: LoginComponentComponent } // for redirect
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    HomeComponent,
    UserComponent,
    UserGetResumeComponent,
    JobPostComponent,
    JobPostGetComponent,
    GetAllUsersComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
  }
}
