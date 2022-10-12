import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaq } from './faq/faq';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private faqUrl = 'assets/faqs.json';

  constructor(private http: HttpClient) {}

  getFaqs() {
    return this.http.get(this.faqUrl);
  }
}
