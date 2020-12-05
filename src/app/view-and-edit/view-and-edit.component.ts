import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { ListSchedules } from 'src/app/Models/list-schedules.model';
import { BrowserModule } from '@angular/platform-browser'
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";

@Component({
  selector: 'app-view-and-edit',
  templateUrl: './view-and-edit.component.html',
  styleUrls: ['./view-and-edit.component.css']
})
export class ViewAndEditComponent implements OnInit {

  schedules: any[];
  deleteScheduleName: string;

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  deleteAllSchedules(){
    if(confirm("Confirm deleting all course lists?")) {
      this.service.deleteAllSchedules().subscribe(e =>{
        alert(Object.values(e));
        this.displaySchedules();
      },error => {
        alert(error.error)
      })
    }
  }

  deleteSchedule(){
    if(confirm("Are you sure you would like to delete: " + this.deleteScheduleName)) {
      this.service.deleteSchedule(this.deleteScheduleName).subscribe(e =>{
        alert(Object.values(e));
        this.displaySchedules();
      },error => {
        alert(error.error)
      })
    }
  }

  displaySchedules() {
    this.service.listSchedules().subscribe(e => {
      var user = firebase.auth().currentUser;
      var email = user.email;
      for (let [key, value] of Object.entries(e)) {
        if(Object.entries(value)[0][1] !=  email){
          delete e[key];
        }
      }
        this.schedules = e;
      },error => {
        alert(error.error)
      })
  }
}
