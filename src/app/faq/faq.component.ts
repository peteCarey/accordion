import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
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
  questionId: string = '';

  @Input() icon = 'arrow';
  @ViewChildren('el', { read: ElementRef }) el!: QueryList<ElementRef>;

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

  toggle(i: number) {
    this.el.toArray()[i].nativeElement.classList.toggle('active');
    const panel = this.el.toArray()[i].nativeElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
}
