import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../components/dialog/dialog.component';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  userList!: User[];
  constructor(private dialog: MatDialog) { }

  confirmDialaog() {
    this.dialog.open(DialogComponent, { data: { 'name': 'Ahme Abd ElGhany' } })
  }

  showUsers(userList: User[]) {
    this.dialog.open(DialogComponent, { data: userList })
  }

}
