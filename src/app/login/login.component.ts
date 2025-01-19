import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  private readonly validUsers = [
    { email: 'dhruvalmakwana6@gmail.com', password: 'Admin@123' },
    { email: 'user2@example.com', password: 'User2@456' },
    { email: 'user3@example.com', password: 'User3@789' },
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.isValidUser(email, password)) {
        this.authService.login(email); // Update login state
        alert(`Welcome, ${email}!`);
        this.router.navigate(['/home']);
        window.location.reload();
          // Navigate to home
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  private isValidUser(email: string, password: string): boolean {
    return this.validUsers.some(
      (user) => user.email === email && user.password === password
    );
  }
}
