import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from '../User'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:5000/employees"
  constructor(private http: HttpClient) { }

  getUser(user: User) : Observable<User>{
    const url = `${this.apiUrl}/${user.id}`
    return this.http.get<User>(url); 
  }

}
