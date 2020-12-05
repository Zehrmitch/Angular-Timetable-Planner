import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase-admin';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Timetable Planner - MZehr4 - Lab 5';
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(){

  }

}
