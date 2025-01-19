import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input() destinationDiv!: ElementRef<HTMLDivElement>;
  thankYouMessage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check for the flash attribute or query params for the thank-you message
    this.route.queryParams.subscribe(params => {
      if (params['thankYouMessage']) {
        this.thankYouMessage = params['thankYouMessage'];

        // Remove the message after a few seconds
        setTimeout(() => {
          this.thankYouMessage = null;
        }, 3000); // Pop-up duration in milliseconds
      }
    });
  }

  // Scroll to the destination div
  scrollToDestination() {
    if (this.destinationDiv) {
      this.destinationDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('destinationDiv is not defined');
    }
  }
}
