import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { SearchTimetable } from 'src/app/Models/search-timetable.model';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-search-time-table',
  templateUrl: './search-time-table.component.html',
  styleUrls: ['./search-time-table.component.css']
})
export class SearchTimeTableComponent implements OnInit {

  courses: SearchTimetable[];

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  // Search all courses by Subject Code and Course Code

  displaySubjects(SC: string, CC: string) {
    var SC = SC.toUpperCase();
    var CC = CC.toUpperCase();
    this.service.timetableSearch(SC, CC).subscribe(e => {
      this.courses = e;
    });
    return this.courses;
  }
}
