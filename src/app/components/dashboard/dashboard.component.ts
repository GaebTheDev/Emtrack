import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router){}
  
  firstName : string = sessionStorage.getItem("firstName")!;
  lastName : string = sessionStorage.getItem("lastName")!;
  email : string = sessionStorage.getItem("email")!;
}
