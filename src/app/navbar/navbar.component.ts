import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule], // Add RouterModule to imports
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected styleUrl to styleUrls
})
export class NavbarComponent implements OnInit {
  
  @Input() destinationDiv!: ElementRef<HTMLDivElement>;
  @Input() faqsDiv!: ElementRef<HTMLDivElement>;
  @Input() aboutUsDiv!: ElementRef<HTMLDivElement>;
  @Input() contactUsDiv!: ElementRef<HTMLDivElement>; // Contact Us input

  scrollToDestination() {
    if (this.destinationDiv) {
      this.destinationDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToFAQs() {
    if (this.faqsDiv) {
      this.faqsDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToAboutUs() {
    if (this.aboutUsDiv) {
      this.aboutUsDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContactUs() {
    if (this.contactUsDiv) {
      this.contactUsDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}