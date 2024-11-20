import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../../../shared/src/lib/components/search-box/search-box.component';

@Component({
  selector: 'lib-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss',
  providers: [HttpClient],
})
export class ByCapitalPageComponent {
  private _httpClient = inject(HttpClient);
  searchByCapital(capital: Event) {
    this._httpClient
      .get('https://restcountries.com/v3.1/all')
      .subscribe((data) => console.log('countries', data));
    console.log('CAPITAL', capital);
  }
}
