import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Retrieve logged-in user's email
    this.userEmail = this.authService.getLoggedInUser();
  }

  logout(): void {
    // Clear user session and redirect to home
    this.authService.logout();
    alert('You have been logged out successfully.');
    this.router.navigate(['/home']).then(() => {
      window.location.reload(); // Refresh the page after redirecting
    });
  }
}
