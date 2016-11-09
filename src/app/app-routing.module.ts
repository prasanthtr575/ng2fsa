import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'student', component: StudentDashComponent},
  { path: 'applyleave', component: ApplyLeaveComponent},
  { path: 'ga', component: GaDashComponent},
  { path: 'gaapprove', component: ApproveLeaveComponent},
  { path: 'hod', component: HodDashComponent},
  { path: 'hodapprove', component: HodApproveLeaveComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}