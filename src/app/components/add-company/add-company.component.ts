import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  @Input() companyName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
