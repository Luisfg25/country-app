import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './components/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './components/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './components/by-region-page/by-region-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

export const COUNTRIES_ROUTES: Routes = [
  { path: 'by/:id', component: CountryPageComponent },
  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: 'by-country', component: ByCountryPageComponent },
  { path: 'by-region', component: ByRegionPageComponent },
  // { path: '**', redirectTo: 'by-capital' },
];
