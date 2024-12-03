import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private _httpClient = inject(HttpClient);

  searchCountries(term: string, by: string): Observable<Country[] | null> {
    const url = `${this.apiUrl}/${by}/${term}`;

    return this._httpClient
      .get<Country[]>(url)
      .pipe(catchError(() => of(null)));
  }
}
