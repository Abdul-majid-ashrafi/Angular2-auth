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
  { path: 'user', component: UserComponent },
  { path: '**', component: LoginComponentComponent } // for redirect
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    HomeComponent,
    UserComponent,
    UserGetResumeComponent
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
