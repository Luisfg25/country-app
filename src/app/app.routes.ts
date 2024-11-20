import { Routes } from '@angular/router';
import { AboutPageComponent } from '../../projects/shared/src/lib/components/about-page/about-page.component';
import { ContactPageComponent } from '../../projects/shared/src/lib/components/contact-page/contact-page.component';
import { HomePageComponent } from '../../projects/shared/src/public-api';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'countries',
    loadChildren: () =>
      import('../../projects/countries/src/lib/countries-routes').then(
        (m) => m.COUNTRIES_ROUTES
      ),
  },
  { path: '**', redirectTo: 'countries' },
];
