import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.url}/employees`)
  }

  getEmployeeById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees?id=${id}`);
  }

  getEmployeeByEmail(email: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees?id=${email}`);
  }

  addEmployee(employee: Employee){
    return this.http.post(`${this.url}/employees`, employee);
  }

  deleteEmployee(employee:Employee){
    return this.http.delete(`${this.url}/employees?id=${employee.id}`);
  }
}
