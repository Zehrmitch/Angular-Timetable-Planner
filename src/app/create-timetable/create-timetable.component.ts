import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { NewTimetable } from 'src/app/Models/new-timetable.model';
import { UpdateSchedule } from 'src/app/Models/update-schedule.model';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";

@Component({
  selector: 'app-create-timetable',
  templateUrl: './create-timetable.component.html',
  styleUrls: ['./create-timetable.component.css']
})
export class CreateTimetableComponent implements OnInit {

  courseList: NewTimetable = {
    info: ''
  };

  scheduleList: UpdateSchedule = {
    text: ''
  };

  scheduleName: string;
  isPublic: boolean;
  description: string;

  constructor(private service: RequestService, public auth: AngularFireAuth) { 
    this.isPublic = false;
    this.description = "";
  }

  ngOnInit(): void {
  }

  setPrivate(){
    this.isPublic=false;
  }
  setPublic(){
    this.isPublic=true;
  }

  createNewSchedule() {
    var user = firebase.auth().currentUser;
    var email = user.email;
    console.log(email);
    this.service.createSchedule(this.scheduleName, this.description, this.isPublic, email).subscribe(e => {
      this.courseList = e;
    });
    return this.courseList;
  }

  addCourses(schedulesName: String){
    let courses = {};
    for(var i = 1; i < 7; i++){
        var key = (<HTMLInputElement>document.getElementById(String(i) + "c")).value;
        var val = (<HTMLInputElement>document.getElementById(String(i) + "n")).value;
        if (key != "" && val != ""){
            courses[key] = val;
        }
    }
    this.service.updateSchedule(schedulesName, courses).subscribe(e => {
      this.scheduleList = e;
    });
    return this.scheduleList;
  }
}
