import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { CacheSotre } from '../interfaces/cache-store-interface';
import { Country } from '../interfaces/country.interface';
import { Region } from './../interfaces/regions.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private _httpClient = inject(HttpClient);

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheSotre = {
    byCapital: {
      term: '',
      countries: [],
    },
    byRegion: {
      region: '',
      countries: [],
    },
    byCountries: {
      term: '',
      countries: [],
    },
  };

  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStoreage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore') ?? '{}');
  }

  searchCountries(
    term: string | Region,
    by: string
  ): Observable<Country[] | null> {
    const url = `${this.apiUrl}/${by}/${term}`;

    return this._httpClient.get<Country[]>(url).pipe(
      tap((countries) => {
        switch (by) {
          case 'name':
            console.log(term, countries);
            this.cacheStore.byCountries = { term, countries };
            console.log(this.cacheStore);
            break;
          case 'capital':
            console.log(term, countries);
            this.cacheStore.byCapital = { term, countries };
            console.log(this.cacheStore);
            break;
          case 'region':
            console.log(term, countries);
            this.cacheStore.byRegion = {
              region: (term as Region) ?? '',
              countries,
            };
            console.log(this.cacheStore);
            break;
        }
      }),
      tap(() => this.saveToLocalStoreage()),
      catchError(() => of(null))
    );
  }
}
