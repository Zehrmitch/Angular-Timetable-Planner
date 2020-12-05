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

  numSchedules: number;
  scheduleUpdate: string;
  scheduleName: string;
  isPublic: boolean;
  updateIfPublic: boolean;
  description: string;
  descriptionUpdate: string;

  constructor(private service: RequestService, public auth: AngularFireAuth) { 
    this.numSchedules = 0;
    this.isPublic = false;
    this.updateIfPublic = false;
    this.description = "";
    this.descriptionUpdate = this.description;
  }

  ngOnInit(): void {
    this.checkNumSchedules();
  }

  setPrivate(){
    this.isPublic=false;
  }
  setPublic(){
    this.isPublic=true;
  }

  updatePrivate(){
    this.updateIfPublic=false;
  }
  updatePublic(){
    this.updateIfPublic=true;
  }

  checkNumSchedules(){
    this.numSchedules = 0;
    var user = firebase.auth().currentUser;
    this.service.listSchedules().subscribe(e => {
      for (let [key, value] of Object.entries(e)) {
        if(Object.entries(value)[0][1] == user.email){
          this.numSchedules++;
        }
      }
      },error => {
        alert(error.error)
      })
  }

  // Calls create new schedule using inputed data and some login info
  createNewSchedule() {
      if (this.numSchedules >= 20){
        alert("You already have 20 schedules. Please delete some and try again");
      }else {
        var user = firebase.auth().currentUser;
        var email = user.email;
        if (this.description == ""){
          this.description = "No description";
        }
        this.service.createSchedule(this.scheduleName, this.description, this.isPublic, email).subscribe(e => {
          this.courseList = e;
        });
        alert("Schedule Created");
      }
      this.checkNumSchedules();
  }

  // Updates the schedule with input data
  addCourses(){
    let courses = {};
    var user = firebase.auth().currentUser;
    var email = user.email;
    if (this.descriptionUpdate == ""){
      this.descriptionUpdate = "No description";
    }
    for(var i = 1; i < 7; i++){
        var key = (<HTMLInputElement>document.getElementById(String(i) + "c")).value;
        var val = (<HTMLInputElement>document.getElementById(String(i) + "n")).value;
        if (key != "" && val != ""){
            courses[key] = val;
        }
    }
    this.service.updateSchedule(this.scheduleUpdate, this.descriptionUpdate, this.updateIfPublic, email, courses).subscribe(e => {
      this.scheduleList = e;
    });
    return this.scheduleList;
  }
}
