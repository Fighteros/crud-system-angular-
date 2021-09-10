import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Comapny';
import { User } from 'src/app/User';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() company!: Company;
  userList!: User[];
  constructor(private userService: UserService, private dialog: DialogService) { }

  ngOnInit(): void {
    // no need to fetch from the server from 
    // parent much faster and easier

    // this.companyService.getCompany(this.company).subscribe((c) => (this.userList = c.employees))
    this.userList = this.company.employees
  }

  deleteUser(user: User) {
    const newUserList = this.userList.filter(u => (u.id !== user.id))
    const newCompany = {
      id: this.company.id,
      companyName: this.company.companyName,
      employees: newUserList
    }
    this.userService.deleteUser(this.company.id!, newCompany).subscribe(() => (this.userList = this.userList.filter(u => (u.id !== user.id))))
  }


  editUser(user: User) {
    const newUserList = this.userList.filter(u => (u.id !== user.id))
    newUserList.push(user)
    const newCompany = {
      id: this.company.id,
      companyName: this.company.companyName,
      employees: newUserList,
    }
    this.userService.updateUser(this.company.id!, newCompany).subscribe()
  }



  // check the route and return value based on my requirement
  // hasRoute(route: string) {
  //   return this.router.url === route;
  // }

  // openDialog() {
  //   this.dialog.showUsers(this.userList)
  // }



}
