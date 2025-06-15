import { Component } from '@angular/core';
import { LoginService } from '../login/login-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent {
  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void{
    this.loginService.logout();
    this.router.navigate(['/login'])
  }

}
