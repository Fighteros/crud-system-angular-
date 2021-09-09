import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  showAddCompany: boolean = false;
  // showEditCompanyState: { [id: number]: boolean } = {};
  private subjectOne = new Subject<any>();
  private subjectTwo = new Subject<any>();
  constructor() { }

  toggleShowAddCompany(): void {
    this.showAddCompany = !this.showAddCompany;
    this.subjectOne.next(this.showAddCompany)
  }

  //  deprecated as we no longer need group state
  // we need indivdual state

  // toggleShowEditComany(id: number): void {
  //   console.log(this.showEditCompanyState)
  //   let opened: boolean = this.showEditCompanyState[id];
  //   if (opened !== undefined) {
  //     opened = !opened;
  //   } else {
  //     opened = true
  //   }
  //   this.subjectTwo.next(this.showEditCompanyState)
  // }

  onToggleEdit(): Observable<any> {
    return this.subjectTwo.asObservable()
  }

  onToggleAdd(): Observable<any> {
    return this.subjectOne.asObservable()
  }
}
