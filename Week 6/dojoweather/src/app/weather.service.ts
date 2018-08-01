import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Weather } from './weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '918f6cc49a648cd032f2f376f431d342';

  constructor(private _http: HttpClient) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather/?q=${city},usa${this.apiKey}`);

  }



}
