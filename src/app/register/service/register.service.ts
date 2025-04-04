import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Register } from '../models/register';
import { HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  observe:'response'
};

@Injectable({
  providedIn: 'root'
})


export class RegisterService {
    private API_URL: string = 'http://localhost:5073/api/auth/register'

  constructor(private http: HttpClient) { }

  register(register: Register): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.API_URL, register, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as const  // 👈 this is important
    });
  
  }
}