import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  // Optional: add styles if needed.
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error: string = '';
  success: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Create the registration form with fields: username, email, password, confirmPassword.
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to ensure that password and confirmPassword match.
  passwordMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmPassword').value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      // Here you would normally call an API to register the user.
      // For demonstration, we simply log and show a success message.
      console.log('Registration successful!', username, email, password);
      this.success = 'Registration successful! You can now log in.';
      this.error = '';
      this.registerForm.reset();
    } else {
      this.error = 'Please ensure the form is filled out correctly.';
      this.success = '';
    }
  }
}
