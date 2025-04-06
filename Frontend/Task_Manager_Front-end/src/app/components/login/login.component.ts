// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    
  
this.authService.login(this.loginForm.value).subscribe({
  next: (token: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', this.loginForm.value.username);
    this.authService.setUsername(this.loginForm.value.username); 
    this.router.navigate(['/dashboard']); 
  },
  error: err => {
    this.error = 'Login failed. Please check your credentials.';
  }
});

  }
}
