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
  }

  onExitClicked() {
    this.sidebarVisible = false;
  }
}
