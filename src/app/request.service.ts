import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SubjectList } from './Models/subject-list.model';
import { CourseSearch } from './Models/course-search.model';
import { SearchTimetable } from './Models/search-timetable.model';
import { NewTimetable } from './Models/new-timetable.model';
import { UpdateSchedule } from './Models/update-schedule.model';
import { ListSchedules } from './Models/list-schedules.model';

const postHeader = new HttpHeaders().set("Content-Type","text/html; charset=utf-8");
const putHeader = new HttpHeaders().set("Content-Type","application/json; charset=utf-8");
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  // API middleware
  router = `http://${window.location.hostname}:3000/api`;
  constructor(private http : HttpClient) { }

  getSubjects(): Observable<SubjectList[]> {
    return this.http.get<SubjectList[]>(this.router + '/nameAndCodes');
  }

  courseSearch(courseCode: String): Observable<CourseSearch[]> {
    return this.http.get<CourseSearch[]>(this.router + '/getCourseCodes/' + courseCode);
  }

  timetableSearch(subjectCode: String, courseCode: String): Observable<SearchTimetable[]> {
    return this.http.get<SearchTimetable[]>(this.router + '/getCourseSearch/' + subjectCode + '/' + String(courseCode));
  }

  createSchedule(scheduleName: String, description: String, access: boolean, email: string): Observable<NewTimetable> {
    return this.http.post<NewTimetable>(this.router + '/createSchedule/' + scheduleName + '/' + description + '/' + access + '/' + email, {}, {headers: postHeader});
  }

  updateSchedule(scheduleName: String, description: String, publicity: boolean, email: string, courses: {}): Observable<UpdateSchedule> {
    return this.http.put<UpdateSchedule>(this.router + '/updateSchedule/' + scheduleName + '/' + description + '/' + publicity + '/' + email, {body: courses}, {headers: putHeader});
  }

  listSchedules(): Observable<ListSchedules[]> {
    return this.http.get<ListSchedules[]>(this.router + '/viewSchedules');
  }

  deleteSchedule(scheduleName: String) {
    return this.http.delete(this.router + '/deleteSchedule/' + scheduleName);
  }

  deleteAllSchedules(){
    return this.http.delete(this.router + '/deleteAllSchedules');
  }
}
