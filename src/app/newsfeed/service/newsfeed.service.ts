import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsfeedItem } from '../models/newsfeed-item';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private API_URL: string = 'http://localhost:5073/api/newsfeed'
  constructor(private http: HttpClient) { }

  getNewsfeedItems(): Observable<NewsfeedItem[]> {
    return this.http.get<NewsfeedItem[]>(this.API_URL);
  }
}
