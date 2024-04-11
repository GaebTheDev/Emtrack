import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) { }

  sidebarVisible: boolean = false;

  onBarClicked() {
    this.sidebarVisible = true;
    console.log(this.sidebarVisible);
  }

  onExitClicked() {
    this.sidebarVisible = false;
    console.log(this.sidebarVisible);
  }
}
