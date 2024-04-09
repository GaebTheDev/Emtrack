import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post(`${this.url}/users`, user);
  }

  getUserByEmail(email : String): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users?email=${email}`);
  }
}
