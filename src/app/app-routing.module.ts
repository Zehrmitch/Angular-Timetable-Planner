import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'schedules', component: SchedulesComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo:'main',pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
