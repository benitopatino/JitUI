import { Component } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-form',
  imports: [FormsModule, CommonModule],
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
  onSubmit(myForm: NgForm): void{

    // validate
    
    if(!myForm.valid)
      return;
    
    // call register service

    this.registerService.register(this.register)
      .subscribe({
        next: (response: HttpResponse<any>)=>{
          if(response.status == HttpStatusCode.Ok)
            this.router.navigate(['/login']);
        },
        error: ()=>{
          myForm.resetForm();
          this.router.navigate(['/register'])
        }
      })
  }
}
