import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/User';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userList!: User[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: User[]) {
  }

  ngOnInit(): void {
  }


}
