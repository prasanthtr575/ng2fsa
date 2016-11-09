import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { DataService } from '../data.service';

@Component({
  selector: 'signup',
  templateUrl: '../signup/signup.component.html'
})

export class SignUpComponent {
  model = new Student('Prasanth','235465','mail@san.com','9456125923');
  active = true;
  submitted = false;
  
  constructor(
    private router: Router,
    private dataService: DataService) { }
  
  onSubmit() { 
    this.submitted = true;
     
    this.dataService.createStudent(this.model)
      .then(()=>{
        this.gotoLogin();
      });
  }
  
  gotoLogin(): void {
    this.router.navigate(['/login']);
  }
}