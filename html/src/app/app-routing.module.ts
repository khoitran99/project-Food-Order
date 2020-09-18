import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import{MycourseComponent} from './mycourse/mycourse.component';
import{CourseComponent} from './course/course.component';
import{MyorderComponent} from './myorder/myorder.component';

const routes: Routes = [
  {path : 'login',component : LoginComponent},
  {path : 'home' ,component : HomeComponent},
  {path : 'mycourse',component: MycourseComponent},
  {path : 'course',component : CourseComponent},
  {path : 'myorder', component : MyorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
