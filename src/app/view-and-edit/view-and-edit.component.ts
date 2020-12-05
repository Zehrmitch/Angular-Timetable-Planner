import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { ListSchedules } from 'src/app/Models/list-schedules.model';
import { BrowserModule } from '@angular/platform-browser'

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
    this.service.deleteAllSchedules().subscribe(e =>{
      alert(e);
      this.displaySchedules();
    },error => {
      alert(error.error)
    })
  }

  deleteSchedule(){
    this.service.deleteSchedule(this.deleteScheduleName).subscribe(e =>{
      alert(e);
      this.displaySchedules();
    },error => {
      alert(error.error)
    })
  }

  displaySchedules() {
    this.service.listSchedules().subscribe(e => {
        //const entries = Object.entries(e);
        //console.log("result: " + entries);
        this.schedules = e;
      },error => {
        alert(error.error)
      })
    }
}
