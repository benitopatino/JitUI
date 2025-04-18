import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
          myForm.resetForm();
          this.router.navigate(['/login'])
        }
      });

  }


}
