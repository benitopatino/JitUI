import { Component } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';
import { FormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
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

  constructor(private registerService: RegisterService){}
  onSubmit(register: Register): void{
    this.registerService.register(register)
      .subscribe((response:HttpResponse<any>)=>{
        console.log(response.status);
      });
  }
}
