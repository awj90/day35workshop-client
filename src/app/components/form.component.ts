import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, debounceTime, filter, map } from 'rxjs';
import { SearchService } from '../search.service';
import { BookSummary } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  fb = inject(FormBuilder);
  searchService = inject(SearchService);
  form!: FormGroup;
  sub$!: Subscription;
  resp$!: Observable<BookSummary[]>;

  // on init, create a form and subscribe to value changes in form
  ngOnInit(): void {
    // create form
    this.form = this.fb.group({
      keyword: this.fb.control('', [Validators.required]),
    });

    // filter away empty queries, debounce the observable by 500 ms, then subscribe to the observable
    // note form.valueChange holds data in the form of an object
    this.sub$ = this.form.valueChanges
      .pipe(
        filter((newValue) => newValue['keyword'].trim().length > 0),
        debounceTime(500)
      )
      .subscribe({
        next: (newValue) => {
          console.info(newValue);
          this.resp$ = this.searchService.getResultsAsObservable(
            newValue['keyword']
          );
        },
        error: (error) => console.error(error),
        complete: () => this.sub$.unsubscribe(),
      });
  }
}
