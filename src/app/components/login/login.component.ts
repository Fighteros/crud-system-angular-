import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { User } from '../../User';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password! : string;
  rememberMe: boolean = false;
  isLoggedIn! : boolean;
  isUsernameValid?: boolean;
  constructor(private loginService: LoginService,private route: Router) { 
  }

  ngOnInit(): void {
  }

  // dummy validation
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

  // can be designed in much easier way 
  // but i wanted to use angular services
  login(user: User){
    this.loginService.getUser(user).subscribe((u) => {
      if(u.password === user.password){
        this.loginService.loginSuccess(true)
        this.isLoggedIn = this.loginService.getState();
        return Swal.fire({
          title: 'logined Sucessfully',
          icon: 'success', 
        })
      }
      else return Swal.fire('Credentials aren\'t correct', 'sorry, try again ', 'error')
    });
    // this.route.navigate(['/home'])
  }

}
