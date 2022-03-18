import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  key:string = '73ab6751bd324601b05fe39a8711729e';
  constructor(private http: HttpClient) { }

  getData(){
    let url="https://api.weatherbit.io/v2.0/current?city=Jerusalem&country=il&key=73ab6751bd324601b05fe39a8711729e";
    return this.http.get(url);
  }
}


