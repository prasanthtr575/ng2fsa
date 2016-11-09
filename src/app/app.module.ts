//import '/rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDashComponent } from './dashboard/student/student.dash.component';
import { ApplyLeaveComponent } from './dashboard/student/apply.leave.component';
import { GaDashComponent } from './dashboard/ga/ga.dash.component';
import { ApproveLeaveComponent } from './dashboard/ga/approve.leave.component';
import { HodDashComponent } from './dashboard/hod/hod.dash.component';
import { HodApproveLeaveComponent } from './dashboard/hod/approve.leave.component';
import { DataService }          from './data.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    StudentDashComponent,
    ApplyLeaveComponent,
    GaDashComponent,
    ApproveLeaveComponent,
    HodDashComponent,
    HodApproveLeaveComponent
  ],
  bootstrap: [AppComponent],
  providers: [ DataService ],
})

export class AppModule { }
