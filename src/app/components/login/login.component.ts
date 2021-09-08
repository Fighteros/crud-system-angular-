import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { User } from '../../User';
import { LoginService } from 'src/app/services/login.service';
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
  constructor(private loginService: LoginService) { }

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
    else {
      // dummy needs user model
      const currentUser = {
        id: 1,
        username: this.username,
        password: this.password,
      }
      this.login(currentUser);
    }
  }

  login(user: User){
    this.loginService.getUser(user).subscribe((u) => {
      if(u.password === user.password){
        return Swal.fire({
          title: 'logined Sucessfully',
          icon: 'success'
        })
      }
      else return Swal.fire('Cridential aren\'t correct', 'sorry, try again ', 'error')
    });
  }
}
