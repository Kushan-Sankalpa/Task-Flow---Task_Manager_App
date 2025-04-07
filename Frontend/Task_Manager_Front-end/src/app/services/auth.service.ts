import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  // BehaviorSubject to hold the current username.
  private usernameSubject = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  public username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) { }

   // Call the backend login endpoint and return the JWT token.
  login(credentials: any): Observable<string> {
    return this.http.post(this.apiUrl + '/login', credentials, { responseType: 'text' });
  }

  // Call the backend registration endpoint.
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl + '/register', user);
  }

  // Update the username in the BehaviorSubject after login
  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  // Clear the username on logout.
  clearUsername() {
    this.usernameSubject.next(null);
  }
}
