import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { ViewAllComplaintComponent } from './view-all-complaint/view-all-complaint.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component'

const myroute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"usersignup",
    component:UserSignupComponent
  },
  {
    path:"profile",
    component:UserProfileComponent
  },
  {
    path:"complain",
    component:AddComplaintComponent
  },
  {
    path:"viewcomplain",
    component:ViewComplaintComponent
  },
  {
    path:"viewall",
    component:ViewAllComplaintComponent
  }
  

]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserSignupComponent,
    UserLoginComponent,
    NavbarComponent,
    UserProfileComponent,
    AddComplaintComponent,
    UserNavbarComponent,
    ViewComplaintComponent,
    ViewAllComplaintComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
