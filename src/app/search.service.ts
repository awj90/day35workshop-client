import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookSummary } from './models';

// this service sets up the HttpParams and does the http get request to return an Observable<BookSummary[]>

@Injectable()
export class SearchService {
  http = inject(HttpClient);
  queryParams!: HttpParams;

  getResultsAsObservable(query: string): Observable<BookSummary[]> {
    this.queryParams = new HttpParams().set('query', query);
    // console.info(query);
    return this.http.get<BookSummary[]>(
      'http://localhost:8080/api/book/search',
      {
        params: this.queryParams,
      }
    );
  }
}
