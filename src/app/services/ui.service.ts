import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  showAddCompany: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleShowAddCompany(): void {
    this.showAddCompany = !this.showAddCompany;
    this.subject.next(this.showAddCompany)
  }


  onShowAddCompany(): Observable<any> {
    return this.subject.asObservable()
  }
}
