import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  newScheduleName: string;
  isPublic: boolean;
  description: string;

  deleteScheduleName: string;
  
  timetableName: string;
  timetable: any[];
  searchSubject: string = "";
  searchCode: string = "";
  searchComponent: string = "";

  savedCourses: any;
  temp :any;
  courseCodes: any[] = [];
  subjects: any[] = [];
  components: any[] = [];
  startTimes: any[] = [];
  endTimes: any[] = [];
  days: any[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  createSchedule() {
    var data = {
      listName: "",
      creator: "",
      lastEdit: "",
      numCourses: false,
      courses: true,
      visible: true,
    }

    //return new Promise<any>((resolve, reject) =>{
       // this.firestore.collection("users").add(data)
   //         .then(res => {
   //           alert("user added");
    //        }, err => reject(err));
   // });
  }

}
