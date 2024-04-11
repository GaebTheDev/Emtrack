import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sm-sidebar',
  templateUrl: './sm-sidebar.component.html',
  styleUrl: './sm-sidebar.component.css'
})
export class SmSidebarComponent {
  constructor(private router: Router){}

  @Input()
  sidebarVisible :boolean = false;

  @Output()
  exitClicked : EventEmitter<string> = new EventEmitter<string>;

  onExitClicked(){
    this.exitClicked.emit('');
  }

  onHomeClicked(){
    this.router.navigate(['dashboard/home']);
    this.onExitClicked();
  }

  onCompanyClicked() {
    this.router.navigate(['dashboard/company']);
    this.onExitClicked();
  }

  onEmployeesClicked() {
    this.router.navigate(['dashboard/employees']);
    this.onExitClicked();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  
}
