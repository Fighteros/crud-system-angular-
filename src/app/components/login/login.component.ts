import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password! : string;
  rememberMe: boolean = false;

  isUsernameValid?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.username && !this.password){
      Swal.fire('Not Vaild', 'username and password must not be empty', 'error')
    }
    else if(!this.username){
      Swal.fire('Not Vaild', 'username must not be empty', 'error')
    }
    else if(!this.password){
      Swal.fire('Not Vaild', 'password must not be empty', 'error')
    }
  }


}
