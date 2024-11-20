import { Component, input, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  public placeHolder = input<string>('');
  public onValue = output<Event>();

  emitValue(value: any) {
    this.onValue.emit(value);
  }
}
