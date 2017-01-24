import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';


// Must export the config for firebase
export const firebaseConfig = {
  apiKey: "AIzaSyArEv-G1I3BR9z7K4Sjpjmr92Z8Ge2REB4",
  authDomain: "facebooklogen.firebaseapp.com",
  databaseURL: "https://facebooklogen.firebaseio.com",
  storageBucket: "project-8907647471000011657.appspot.com",
  messagingSenderId: "399611193314"
};

// for routing
const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: '**', component: LoginComponentComponent } // for redirect
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignupComponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
  }
}
