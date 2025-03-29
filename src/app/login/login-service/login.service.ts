import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from '../models/login';
import { AuthResponse } from '../models/auth-response';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private API_URL: string = 'http://localhost:5073/api/auth/login'
  static readonly JitTokenSessionName: string = 'jitAuthToken';
  constructor(private http: HttpClient) { }

  login(login: Login): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.API_URL, login, httpOptions)
      .pipe(
        tap((response: AuthResponse) => {
          if (response.isAuthenticated && response.token)
            localStorage.setItem(LoginService.JitTokenSessionName, response.token);
        })
      );
  }


  getToken(): string | null {
    return localStorage.getItem(LoginService.JitTokenSessionName);
  }


}
