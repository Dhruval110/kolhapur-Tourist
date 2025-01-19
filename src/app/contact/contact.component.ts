import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  thankYouMessage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  // Function to handle form submission and show thank you message
  onSubmit() {
    // Logic to handle form submission (e.g., API call to submit form data)

    // Show thank you message
    this.thankYouMessage = 'Thank you for your message! We will get back to you soon.';

    // Remove the message after a few seconds
    setTimeout(() => {
      this.thankYouMessage = null;
    }, 3000); // Popup duration in milliseconds
  }
}
