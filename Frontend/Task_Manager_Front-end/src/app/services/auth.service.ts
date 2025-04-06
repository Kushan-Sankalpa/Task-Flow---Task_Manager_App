
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL of the backend authentication endpoints.
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  // Sends login credentials to the backend and expects a JWT token as plain text.
  login(credentials: any): Observable<string> {
    return this.http.post(this.apiUrl + '/login', credentials, { responseType: 'text' });
  }

  // Sends new user details to register a new user.
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl + '/register', user);
  }
}
