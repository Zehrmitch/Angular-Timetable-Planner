import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AuthGuard } from './auth/auth.guard';

// Set all of the routes. Accessed by nav bar at top
const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'schedules', component: SchedulesComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'courseList', component: CourseListComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: '', redirectTo:'main',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
