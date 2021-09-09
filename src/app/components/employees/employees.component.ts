import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/Comapny';
import { CompanyService } from 'src/app/services/company.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() company!: Company;
  userList!: User[];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    // this.companyService.getCompany(this.company).subscribe((c) => (this.userList = c.employees))
    this.userList = this.company.employees
  }

  test() {
    console.log(this.userList)
  }

}
