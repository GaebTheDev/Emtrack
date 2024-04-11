import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../interfaces/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  constructor(private employeeService: EmployeeService){
    employeeService.getEmployees().subscribe(
      res => {  
        this.employees = res
      }, 
      err => {console.log(err)});
  }

  employees : any = undefined;
  viewMode: string = 'grid';
  viewOptions: any[] = [
    { icon: 'pi pi-table', value: 'grid' },
    { icon: 'pi pi-list', value: 'list' }
  ];

  onViewChanged(){
    // console.log(this.viewMode);
  }

}
