import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Login } from '../models/login';
import { LoginService } from '../login-service/login.service';
import { NewsfeedService } from '../../newsfeed/service/newsfeed.service';
import { CommonModule } from '@angular/common';
import { HttpStatusCode, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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

  @ViewChild('passwordField') passwordField!: NgModel;

  unauthorized: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(myForm: NgForm): void {

    if(!myForm.valid)
      return;

    this.loginService
      .login(this.login)
      .subscribe({
        next: (response: HttpResponse<any>)=>{
          if(response.status == HttpStatusCode.Ok)
          {
            localStorage.setItem(LoginService.JitTokenSessionName, response.body.token);
            this.router.navigate(['/home'])
          }
        },
        error: ()=>{
          this.unauthorized = true;
          setTimeout(() => this.unauthorized = false, 10000); // hide after 5 sec
          this.login.password = '';
          this.passwordField.reset();
        }
      });

  }


}
