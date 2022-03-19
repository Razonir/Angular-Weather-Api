import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  key:string = '1dd1e4e8a38f4d40a1f142730221803';
  constructor(private http: HttpClient) { }

  getData(city:any){
    let url="https://api.weatherapi.com/v1/forecast.json?key=1dd1e4e8a38f4d40a1f142730221803&q="+city+"&days=5&aqi=no&alerts=no";
    return this.http.get(url);
  }
}


