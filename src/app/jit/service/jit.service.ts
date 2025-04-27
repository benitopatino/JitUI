import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jit } from '../models/jit';
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
export class JitService {

  private API_URL: string="http://localhost:5073/api/jit"

  constructor(private http: HttpClient) {}

  create(jit: Jit): Observable<HttpResponse<any>>{
    return this.http.post<any>(this.API_URL, jit, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as const 
    })

  }
}
