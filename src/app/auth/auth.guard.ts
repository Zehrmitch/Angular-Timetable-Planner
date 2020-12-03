import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(){
    var user = firebase.auth().currentUser;
    console.log(user);
    if(user){
      console.log("Logged in");
      return true;
    } else {
      console.log("Logged out");
      alert("Please log in to access this feature");
      this.router.navigateByUrl("/main");
      return false;
    }
  }
}
