import { Component } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';
import { FormsModule } from '@angular/forms';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
  register: Register = {

    firstname: '',
    lastname: '',
    email: '',
    password:'',
  }

  constructor(private registerService: RegisterService, private router: Router){}
  onSubmit(register: Register): void{
    this.registerService.register(register)
      .subscribe((response:HttpResponse<any>)=>{
        if(response.status == HttpStatusCode.Ok)
          this.router.navigate(['/login']);
      });
  }
}
