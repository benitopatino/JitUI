import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../model/userProfile';
import { EditUserProfileDto } from '../model/editUserProfileDto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  observe:'response'
};


@Injectable({
  providedIn: 'root'
})


export class UserProfileService {
  private API_URL: string = 'http://localhost:5073/api/user/profile/'
  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.API_URL + `${username}`);
  }

   getOwnProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.API_URL);
  }

  updateUserProfile(updatedProfile: EditUserProfileDto): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.API_URL, updatedProfile, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as const  // 👈 this is important
    });
  
  }
}
