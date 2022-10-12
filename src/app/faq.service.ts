import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IFaq } from './faq/faq';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private faqUrl = 'assets/faqs.json';

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>(this.faqUrl).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
