import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://lmssts.azurewebsites.net/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'Login',
      {
        username,
        password,
        "provider": 'Manually'
      },
      httpOptions
    );
  }

  register(provider: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'Register',
      {
        provider,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'Logout', { }, httpOptions);
  }

  refreshToken() {
    return this.http.post(AUTH_API + 'RefreshToken', { }, httpOptions);
  }
}