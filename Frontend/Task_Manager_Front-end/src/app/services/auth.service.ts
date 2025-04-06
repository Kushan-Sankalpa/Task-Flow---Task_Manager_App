// src/app/services/auth.service.ts
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

  login(credentials: any): Observable<string> {
    return this.http.post(this.apiUrl + '/login', credentials, { responseType: 'text' });
  }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl + '/register', user);
  }

  // Call this after a successful login.
  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  // Call this on logout.
  clearUsername() {
    this.usernameSubject.next(null);
  }
}
