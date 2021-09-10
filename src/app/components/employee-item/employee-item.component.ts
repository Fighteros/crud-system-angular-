import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
