import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://lmssts.azurewebsites.net/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'SearchUser', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'GetProfile', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'SearchUser', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'IsUserExists', { responseType: 'text' });
  }
}