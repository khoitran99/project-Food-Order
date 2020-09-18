import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CourseComponent } from './course/course.component';
import { MyorderComponent } from './myorder/myorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    MycourseComponent,
    HomeComponent,
    MenuComponent,
    CourseComponent,
    MyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
