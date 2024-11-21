import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private _httpClient = inject(HttpClient);

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    console.log('URL', url);
    return this._httpClient.get<Country[]>(url);
  }
}
