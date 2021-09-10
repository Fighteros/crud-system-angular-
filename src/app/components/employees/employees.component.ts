import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Comapny';
import { CompanyService } from 'src/app/services/company.service';
import { User } from 'src/app/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() company!: Company;
  userList!: User[];
  constructor(private router: Router, private dialog: DialogService) { }

  ngOnInit(): void {
    // no need to fetch from the server from 
    // parent much faster and easier

    // this.companyService.getCompany(this.company).subscribe((c) => (this.userList = c.employees))
    this.userList = this.company.employees
  }


  // check the route and return value based on my requirement
  hasRoute(route: string) {
    return this.router.url === route;
  }

  openDialog() {
    this.dialog.showUsers(this.userList)
  }



}
