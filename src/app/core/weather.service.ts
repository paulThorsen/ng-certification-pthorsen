import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { FiveDayForecast } from './models/five-day-forecast';
import { WeatherConditions } from './models/weather-conditions';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

// In real life this is a bad idea. Secrets should be secret.
const API_KEY = '5a4b2d457ecbef9eb2a71e480b947604';

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  public getWeatherConditionsByZip = (
    zipCode: number
  ): Observable<WeatherConditions> => {
    return this.httpClient.get<WeatherConditions>(
      BASE_WEATHER_URL + '?zip=' + zipCode + '&appid=' + API_KEY
    );
  };

  public getFiveDayForecaseByZip = (
    zipCode: number
  ): Observable<FiveDayForecast> => {
    return this.httpClient.get<FiveDayForecast>(
      BASE_WEATHER_URL + '?zip=' + zipCode + '&cnt=5' + '&appid=' + API_KEY
    );
  };
}
