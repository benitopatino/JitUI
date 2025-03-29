import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Login } from '../models/login';
import { LoginService } from '../login-service/login.service';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {

  login: Login = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  onSubmit(login: Login) {
    console.log(login);
    this.loginService
      .login(login)
      .subscribe(
        (authResponse) => (console.log(authResponse)))
  }


}
