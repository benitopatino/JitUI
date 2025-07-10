import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthResponse } from '../models/auth-response';
import { LoginDTO } from '../models/loginDTO';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  dto: LoginDTO = {
    username: '',
    password: ''
  }

  private API_URL: string = 'http://localhost:5073/api/auth/login'
  static readonly JitTokenSessionName: string = 'jitAuthToken';
  constructor(private http: HttpClient, private jwtService: JwtHelperService) { }

  login(login: Login): Observable<HttpResponse<AuthResponse>> {
    this.dto.username = login.email;
    this.dto.password = login.password;
    return this.http.post<AuthResponse>(this.API_URL, this.dto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as const
    });
  }

  logout(): void {
    localStorage.removeItem(LoginService.JitTokenSessionName);
  }

  isAuthenticated(): boolean {
    let token: string | null = localStorage.getItem(LoginService.JitTokenSessionName);
    if (token)
      return !this.jwtService.isTokenExpired(token);
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem(LoginService.JitTokenSessionName);
  }

  getLoggedOnUser(): string {
    let token: string | null = localStorage.getItem(LoginService.JitTokenSessionName);
    if(token)
    {
      let decodedToken = this.jwtService.decodeToken(token);
      return decodedToken.username;
    }
    else
      return '';
  }

}
