import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) { }

  onCompanyClicked() {
    console.log("company");
  }

  onEmployeesClicked() {
    console.log("employees");
  }

  onReportsClicked(){
    console.log("reports");
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
