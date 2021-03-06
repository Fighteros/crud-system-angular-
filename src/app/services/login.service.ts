import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'
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
  loggedIn = new BehaviorSubject<boolean>(localStorage.getItem("isLoggedIn") === "true");
  isLoggedIn = false;
  private apiUrl = "http://localhost:5000/users"
  constructor(private http: HttpClient) { }

  getUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`
    return this.http.get<User>(url);
  }

  loginSuccess(state: boolean) {
    this.isLoggedIn = state;
  }

  getState(): boolean {
    return this.isLoggedIn;
  }

  login() {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("token", "fghdfghdfghdfghdfghdfghdfgh");
    this.loggedIn.next(true);
    // if (user.userName === "admin" && user.password === "admin") {
    //    localStorage.setItem("isLoggedIn", "true");
    //    localStorage.setItem("token", "add some unique token here");
    //    this.loggedIn.next(true);
    //    this.router.navigate(["/home"]);
    // }
  }


}
