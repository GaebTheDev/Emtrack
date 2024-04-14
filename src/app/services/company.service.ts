import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getCompany(): Observable<Company> {
    return this.http.get<Company>(`${this.url}/company`)
  }

  getCompanyOwner(ownerId: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users?id=${ownerId}`)
  }
}
