import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  private showHeader : boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  headerShown(): void {
    this.showHeader = true;
  }

  headerHidden(): void {
    this.showHeader = false;
  }

  onHeaderChange() : Observable<any> {
    return this.subject.asObservable()
  }
}
