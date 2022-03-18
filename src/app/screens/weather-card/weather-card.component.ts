import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {




  
  data:any;
  weather:any;
  
  constructor( private twitterApi:TwitterService ,private weatherApi:WeatherApiService) {
    this.twitterApi.getTwitts().subscribe(data=>{
      console.log(data);
      this.data = data;
    })

    this.weatherApi.getData().subscribe(weather=>{
      console.log(weather);
      this.weather = weather;
      
    })
    
  }
  ngOnInit(): void {
  }


  
}
