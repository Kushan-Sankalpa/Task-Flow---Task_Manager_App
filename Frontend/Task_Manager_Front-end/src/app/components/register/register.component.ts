import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  error: string = '';
  success: string = '';
  
  // Point this to your Spring Boot registration endpoint
  private apiUrl = 'http://localhost:8080/api/auth/register';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Create a form with username, password, and confirmPassword.
    // Note: Use "validators" (plural) to add our custom validator.
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to ensure password and confirmPassword match.
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    console.log(this.registerForm.value, this.registerForm.valid);
  
    if (this.registerForm.invalid) {
      if (this.registerForm.get('password')?.errors?.['minlength']) {
        this.error = 'Password must be 6 characters or more.';
      } else if (this.registerForm.errors && this.registerForm.errors['mismatch']) {
        this.error = 'Passwords do not match.';
      } else {
        this.error = 'Please ensure the form is filled out correctly.';
      }
      this.success = '';
      return;
    }
  
    const { username, password } = this.registerForm.value;
    // Tell HttpClient to expect a text response instead of JSON.
    this.http.post(this.apiUrl, { username, password }, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          console.log('Registration successful!', response);
          this.success = 'Registration successful! You can now log in.';
          this.error = '';
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration error', err);
          if (err.status === 409) {
            this.error = 'User already exists. Please try a different username.';
          } else {
            this.error = 'Registration failed. Please try again.';
          }
          this.success = '';
        }
      });
  }
  
  
}
