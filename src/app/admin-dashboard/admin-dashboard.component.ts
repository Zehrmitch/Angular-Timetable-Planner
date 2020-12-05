import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase-admin';
import { Observable } from 'rxjs';

interface User{
  email: string;
  password: string;
  name: string;
  isAdmin: boolean;
  enabled: boolean;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { 
  }

  ngOnInit(): void {
    // Get list of all users from the database
    this.usersCollection = this.firestore.collection('users', ref => {
      return ref.orderBy('email');
    });
    this.users = this.usersCollection.valueChanges();
  }

  // Calls firebases email password reset
  resetPass(){
    var user = firebase.auth().currentUser;
    this.auth.sendPasswordResetEmail(user.email).then(function() {
      alert("Password Reset Email Sent");
    }).catch(function(error) {
      alert(error);
    });
  }
}
