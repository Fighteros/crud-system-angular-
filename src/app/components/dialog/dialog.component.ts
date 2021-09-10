import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/User';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimes, faEdit, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userList!: User[];
  opened: boolean = false;
  faTimes = faTimes;
  faEdit = faEdit;
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  constructor(@Inject(MAT_DIALOG_DATA) public data: User[]) {
  }

  ngOnInit(): void {
  }

  userEdit(user: User) {
    this.opened = true;
  }

  saveEdit(user: User) {
    this.opened = false;
  }
}
