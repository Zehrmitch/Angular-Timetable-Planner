import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { CourseSearch } from 'src/app/Models/course-search.model';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  courseList: CourseSearch[];

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  // Display all courses from the json
  displayCourses(courseCode: string) {
    var courseCode = courseCode.toUpperCase();
    this.service.courseSearch(courseCode).subscribe(e => {
      this.courseList = e;
    });
    return this.courseList;
  }
}
