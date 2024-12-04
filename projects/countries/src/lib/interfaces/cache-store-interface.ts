import { Country } from './country.interface';
import { Region } from './regions.type';

export interface CacheSotre {
  byCapital: TermCountries;
  byRegion: RegionCountries;
  byCountries: TermCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region: Region;
  countries: Country[];
}
