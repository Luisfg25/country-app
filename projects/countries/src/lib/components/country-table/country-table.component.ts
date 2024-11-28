import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  standalone: true,
  imports: [DecimalPipe, RouterModule],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss',
  providers: [DecimalPipe],
})
export class CountryTableComponent {
  public countries = input<Country[]>([]);
}
