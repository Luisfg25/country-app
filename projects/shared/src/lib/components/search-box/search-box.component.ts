import { Component, OnDestroy, OnInit, input, output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  public placeHolder = input<string>('');
  public initialValue = input<string>('');
  public onValue = output<string>();

  private debouncer = new Subject<string>();
  private debouncerSubscription!: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onValue.emit(value));
  }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
