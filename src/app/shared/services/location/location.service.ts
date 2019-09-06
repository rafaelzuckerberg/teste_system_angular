import { Injectable } from '@angular/core';
import { Country } from '../../interfaces/location/country'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Region } from '../../interfaces/location/region';
import { State } from '../../interfaces/location/state';
import { City } from '../../interfaces/location/city';
import { District } from '../../interfaces/location/district';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  regions: Region;
  countries: Country;
  states: State;
  cities: City;
  districts: District;

  constructor(private http: HttpClient) { }

  // Apis Regions 
  getRegions() {
    return this.http.get<Region[]>(environment.api + 'dashboard/regioes');
  }


  // Apis countries 
  getCoutries() {
    return this.http.get<Country[]>(environment.api + 'dashboard/paises');
  }


  // Apis States 
  getStates() {
    return this.http.get<State[]>(environment.api + 'dashboard/estados');
  }


  // Apis Cities 
  getCities() {
    return this.http.get<City[]>(environment.api + 'dashboard/cidades');
  }


  // Apis Cities 
  getDistricts() {
    return this.http.get<District[]>(environment.api + 'dashboard/bairros');
  }

  
}
