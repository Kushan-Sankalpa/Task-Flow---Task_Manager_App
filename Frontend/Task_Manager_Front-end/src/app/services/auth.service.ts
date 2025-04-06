import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Back end URL
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  // sends username and password and expects a JWT token as plain text.
  login(credentials: any): Observable<string> {
    return this.http.post(this.apiUrl + '/login', credentials, { responseType: 'text' });
  }

  // sends a new user's details to the backend.
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl + '/register', user);
  }
}
