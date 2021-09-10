import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../Comapny';
import { Observable } from 'rxjs';
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:5000/companies"
  constructor(private http: HttpClient) { }


  deleteUser(id: number, company: Company): Observable<Company> {
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Company>(url, company, httpOptions)
  }

  updateUser(id: number, company: Company): Observable<Company> {
    const url = `${this.apiUrl}/${id}`
    return this.http.put<Company>(url, company, httpOptions)
  }
}
