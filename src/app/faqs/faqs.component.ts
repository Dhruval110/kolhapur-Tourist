import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  toggleFAQ(event: Event) {
    const faqItem = (event.currentTarget as HTMLElement).closest('.faq');
    if (faqItem) {
      faqItem.classList.toggle('active');
    }
  }
}
