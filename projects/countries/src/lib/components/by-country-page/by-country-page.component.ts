import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { LoadingSpinnerComponent } from '../../../../../shared/src/lib/components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from '../../../../../shared/src/lib/components/search-box/search-box.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from '../country-table/country-table.component';

@Component({
  selector: 'lib-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss',
  providers: [HttpClient],
})
export class ByCountryPageComponent implements OnInit {
  private _countriesService = inject(CountriesService);

  countries: Country[] = [];
  initialValue: string = '';

  public isLoading = false;

  ngOnInit() {
    this.countries = this._countriesService.cacheStore.byCountries.countries;
    this.initialValue = this._countriesService.cacheStore.byCountries.term;
  }

  searchByCapital(capital: any) {
    this.isLoading = true;

    this._countriesService
      .searchCountries(capital, 'name')
      .subscribe((countries) => {
        this.countries = countries ?? [];
        this.isLoading = false;
      });
  }
}
