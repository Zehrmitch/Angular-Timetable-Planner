import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllSubjectsComponent } from './display-all-subjects/display-all-subjects.component';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';
import { SearchTimeTableComponent } from './search-time-table/search-time-table.component';
import { CreateTimetableComponent } from './create-timetable/create-timetable.component';
import { ViewAndEditComponent } from './view-and-edit/view-and-edit.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { SchedulesComponent } from './schedules/schedules.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllSubjectsComponent,
    CourseSearchComponent,
    SearchTimeTableComponent,
    CreateTimetableComponent,
    ViewAndEditComponent,
    MainComponent,
    RegisterComponent,
    SchedulesComponent,
    CoursesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
