"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var student_dash_component_1 = require('./dashboard/student/student.dash.component');
var apply_leave_component_1 = require('./dashboard/student/apply.leave.component');
var ga_dash_component_1 = require('./dashboard/ga/ga.dash.component');
var approve_leave_component_1 = require('./dashboard/ga/approve.leave.component');
var hod_dash_component_1 = require('./dashboard/hod/hod.dash.component');
var approve_leave_component_2 = require('./dashboard/hod/approve.leave.component');
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignUpComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'student', component: student_dash_component_1.StudentDashComponent },
    { path: 'applyleave', component: apply_leave_component_1.ApplyLeaveComponent },
    { path: 'ga', component: ga_dash_component_1.GaDashComponent },
    { path: 'gaapprove', component: approve_leave_component_1.ApproveLeaveComponent },
    { path: 'hod', component: hod_dash_component_1.HodDashComponent },
    { path: 'hodapprove', component: approve_leave_component_2.HodApproveLeaveComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map