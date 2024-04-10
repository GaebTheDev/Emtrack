import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) { }

  onHomeClicked(){
    this.router.navigate(['dashboard/home']);
  }

  onCompanyClicked() {
    this.router.navigate(['dashboard/company']);
  }

  onEmployeesClicked() {
    this.router.navigate(['dashboard/employees']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
