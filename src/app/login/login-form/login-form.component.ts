import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Login } from '../models/login';
import { LoginService } from '../login-service/login.service';
import { NewsfeedService } from '../../newsfeed/service/newsfeed.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {

  login: Login = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private newsfeedService: NewsfeedService) { }

  onSubmit(myForm: NgForm): void {

    if(!myForm.valid)
      return;

    this.loginService
      .login(this.login)
      .subscribe(
        (authResponse) => {
          // handle form when credentials are incorrect
          
        });

  }


}
