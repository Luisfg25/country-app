import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { LoadingSpinnerComponent } from '../../../../../shared/src/lib/components/loading-spinner/loading-spinner.component';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/regions.type';
import { CountriesService } from '../../services/countries.service';
import { CountryTableComponent } from '../country-table/country-table.component';

@Component({
  selector: 'lib-by-region-page',
  standalone: true,
  imports: [CountryTableComponent, LoadingSpinnerComponent, NgClass],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss',
  providers: [HttpClient],
})
export class ByRegionPageComponent implements OnInit {
  private _countriesService = inject(CountriesService);

  countries: Country[] = [];

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion!: Region;

  public isLoading = false;

  ngOnInit() {
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this._countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.isLoading = true;

    this.selectedRegion = region;
    this._countriesService
      .searchCountries(region, 'region')
      .subscribe((countries) => {
        this.countries = countries ?? [];
        this.isLoading = false;
      });
  }
}
