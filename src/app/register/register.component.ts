import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      alert(user);
      this.router.navigateByUrl("/main");
      // Signed in
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
  }
}
