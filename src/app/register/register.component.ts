import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase-admin';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordTwo: string;
  
  constructor(public auth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  register(){
    if (this.password == this.passwordTwo){
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        alert(user);
        this.router.navigateByUrl("/main");
        this.createUser();
        // Signed in
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
    }else {
      alert("Passwords do not match. Please try again");
    }
  }

  createUser() {
    var data = {
      email: this.email,
      password: this.password,
      name: this.name,
      isAdmin: false
    }

    return new Promise<any>((resolve, reject) =>{
        this.firestore.collection("users").add(data)
            .then(res => {
              alert("user added");
            }, err => reject(err));
    });
  }
}
