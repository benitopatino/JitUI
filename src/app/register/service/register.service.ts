import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { register } from '../models/register';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})


export class RegisterService {
    private API_URL: string = 'http://localhost:5073/api/auth/register'

  constructor(private http: HttpClient) { }

  register(register: register): Observable<any>{
    return this.http.post(this.API_URL, this.register, httpOptions);
  }

}