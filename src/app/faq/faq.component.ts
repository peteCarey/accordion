import { Component, OnInit } from '@angular/core';
import { IFaq } from './faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  id = 'Q1';
  faqs: IFaq[] = [];

  constructor() {}

  ngOnInit(): void {}
}
