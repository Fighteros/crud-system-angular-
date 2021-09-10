import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { faTimes, faEdit, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() user!: User;
  faTimes = faTimes;
  faEdit = faEdit;
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  opened: boolean = false;

  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  userEdit(user: User) {
    this.opened = true;
  }

  saveEdit(user: User) {
    this.onEditUser.emit(user)
    this.opened = false;
  }

  userDelete(): void {
    this.onDeleteUser.emit(this.user);
  }

}
