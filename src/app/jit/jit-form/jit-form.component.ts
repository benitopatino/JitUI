import { Component } from '@angular/core';
import { Jit } from '../models/jit';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-jit-form',
  imports: [FormsModule],
  templateUrl: './jit-form.component.html',
  styleUrl: './jit-form.component.css'
})
export class JitFormComponent {

  jit: Jit = {
    content:''
  }

  onSubmit(myForm: NgForm): void{
    console.log(this.jit);
  }
}
