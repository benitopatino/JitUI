import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../model/userProfile';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private API_URL: string = 'http://localhost:5073/api/user/profile/'
  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.API_URL + `${username}`);
  }
}
