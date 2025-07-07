import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  observe:'response'
};

@Injectable({
  providedIn: 'root'
})
export class FollowUserService {

  private API_URL: string = 'http://localhost:5073/api/userfollow/follow/'
  private API_URL_2: string = 'http://localhost:5073/api/userfollow/following/'
  constructor(private http: HttpClient) { }

  follow(username: string): Observable<HttpResponse<any>> {
    return this.http.post<any>((this.API_URL + username), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as const  // 👈 this is important
    });
  
  }
  
  getListOfFollowees(): Observable<HttpResponse<any>>{
        return this.http.get<any>(this.API_URL_2, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as const  // 👈 this is important
    });
  }

}
