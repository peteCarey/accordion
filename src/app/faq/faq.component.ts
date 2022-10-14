import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFaq } from './faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  sub!: Subscription;
  faqs: IFaq[] = [];

  showBody = false;

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.sub = this.faqService.getFaqs().subscribe({
      next: (faqs) => {
        this.faqs = faqs;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggle() {
    console.log('button clicked');
    this.showBody = !this.showBody;
  }
}
