import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/auth';

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
	email: string;
	password: string;

	constructor(
		public auth: AngularFireAuth,
		private router: Router,
		private firestore: AngularFirestore
	) {}

	ngOnInit(): void {
		this.email = "";
		this.password = "";
	}

	// Use googles login 
	loginWithGoogle() {
		this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	// Use firebase email login 
	loginWithEmail() {
		this.auth
			.signInWithEmailAndPassword(this.email, this.password)
			.then((result) => {
				alert("Logged in");
				this.router.navigateByUrl("schedules");
			})
			.catch(function (error) {
				alert(error);
			});
	}

	// Log out of the current user
	logout() {
		this.auth.signOut();
		alert("Logged out");
	}
}
