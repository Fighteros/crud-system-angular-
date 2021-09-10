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
  oldUserName!: string;
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
    this.oldUserName = user.username;
    this.opened = true;
  }

  saveEdit(user: User) {
    this.opened = false;
    this.onEditUser.emit(user)
  }

  userDelete(): void {
    this.onDeleteUser.emit(this.user);
  }

  onCancel(): void {
    this.user.username = this.oldUserName
    this.opened = false;
  }

}
