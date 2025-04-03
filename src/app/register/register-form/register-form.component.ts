import { Component } from '@angular/core';
import { Login } from '../../login/models/login';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-form',
  imports: [],
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

}
