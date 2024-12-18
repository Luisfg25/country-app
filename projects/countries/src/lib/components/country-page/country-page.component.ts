import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingSpinnerComponent } from '../../../../../shared/src/lib/components/loading-spinner/loading-spinner.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'lib-country-page',
  standalone: true,
  imports: [DecimalPipe, LoadingSpinnerComponent],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
  providers: [DecimalPipe],
})
export class CountryPageComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _httpClient = inject(HttpClient);

  private _countriesService = inject(CountriesService);

  country: Country | null = null;

  public isLoading = false;

  ngOnInit() {
    this._activatedRoute.params.subscribe(({ id }) =>
      this.searchCountryById(id)
    );
  }

  searchCountryById(id: any) {
    this.isLoading = true;

    this._countriesService
      .searchCountries(id, 'alpha')
      .subscribe((countries) => {
        this.country = countries?.[0] ?? null;
        this.isLoading = false;
      });
  }
}
