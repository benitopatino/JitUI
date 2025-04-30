import { Component } from '@angular/core';
import { Jit } from '../models/jit';
import { FormsModule, NgForm } from '@angular/forms';
import { JitService } from '../service/jit.service';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';

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

  constructor(private jitService: JitService){}

  onSubmit(myForm: NgForm): void{

    if(!myForm.valid)
      return;

    this.jitService.create(this.jit)
    .subscribe({
      
      next: (response: HttpResponse<any>)=>{
        this.clearForm(myForm);
      },
      error: ()=>{
        this.clearForm(myForm);
      }
    })
  }

  clearForm(myForm: NgForm):void{
    this.jit.content='';
    myForm.resetForm();
  }
}
