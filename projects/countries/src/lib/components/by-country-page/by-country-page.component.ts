import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../../../shared/src/lib/components/search-box/search-box.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from '../country-table/country-table.component';

@Component({
  selector: 'lib-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss',
  providers: [HttpClient, CountriesService],
})
export class ByCountryPageComponent {
  private _countriesService = inject(CountriesService);

  countries: Country[] = [];

  searchByCapital(capital: any) {
    this._countriesService
      .searchCountries(capital, 'name')
      .subscribe((countries) => (this.countries = countries));
  }
}
