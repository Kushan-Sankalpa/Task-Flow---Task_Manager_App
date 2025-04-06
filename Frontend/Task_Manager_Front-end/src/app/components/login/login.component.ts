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
    // Create a reactive form with two required fields: username and password.
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Called when the user submits the login form.
  onSubmit(): void {
    if (this.loginForm.invalid) return;  // Stop if form is not valid.
    
    // Call the login function from AuthService.
    this.authService.login(this.loginForm.value).subscribe({
      next: (token: string) => {
        // Save the received JWT token in local storage.
        localStorage.setItem('token', token);
        // Redirect to the task list page.
        this.router.navigate(['/tasks']);
      },
      error: err => {
        this.error = 'Login failed. Please check your credentials.';
      }
    });
  }
}
