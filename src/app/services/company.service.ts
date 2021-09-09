import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Company } from '../Comapny';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})


export class CompanyService {

  private apiUrl = "http://localhost:5000/companies"
  constructor(private http: HttpClient) { }

  getCompany(company: Company): Observable<Company> {
    const companyUrl = `${this.apiUrl}/${company.id}`
    return this.http.get<Company>(companyUrl)
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }


  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company, httpOptions)
  }


  editCompany(company: Company): Observable<Company> {
    const companyUrl = `${this.apiUrl}/${company.id}`
    return this.http.put<Company>(companyUrl, company, httpOptions)
  }

  deleteCompany(company: Company): Observable<Company> {
    const companyUrl = `${this.apiUrl}/${company.id}`
    return this.http.delete<Company>(companyUrl)
  }
}
