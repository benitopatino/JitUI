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
    this.jitService.create(this.jit)
    .subscribe({
      next: (response: HttpResponse<any>)=>{
        if(response.status == HttpStatusCode.Ok)
          console.log('Jit Was passed and created via jit service')
      },
      error: ()=>{
        myForm.resetForm();
        console.log('Nothing was created')

      }
    })
  }
}
