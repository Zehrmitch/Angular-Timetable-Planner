import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { ListSchedules } from 'src/app/Models/list-schedules.model';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  schedules: any[];

  constructor(private service: RequestService) { }

  ngOnInit(): void {
    this.displaySchedules();
  }

  // Display all schedules that dont have accessibility set to false
  displaySchedules() {
    this.service.listSchedules().subscribe(e => {
      for (let [key, value] of Object.entries(e)) {
        if(Object.entries(value)[3][1] ==  "false"){
          delete e[key];
        }
      }
        this.schedules = e;
      },error => {
        alert(error.error)
      })
  }
}
