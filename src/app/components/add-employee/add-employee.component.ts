import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faTimes, faEdit, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Company } from 'src/app/Comapny';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() company!: Company;
  username!: string;
  faTimes = faTimes;
  faEdit = faEdit;
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  showAddUser = false;

  @Output() onCancelButton: EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveButton: EventEmitter<Company> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.showAddUser = false;
    this.onCancelButton.emit(this.showAddUser);
  }

  onSave(): void {
    const randomId = Math.floor(Math.random() * 10000 + 1)
    const newUser = {
      id: randomId,
      username: this.username,
    }
    this.company.employees.push(newUser);
    this.onSaveButton.emit(this.company)
  }

}
