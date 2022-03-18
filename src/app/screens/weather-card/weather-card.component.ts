import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  data:any;
  constructor(private weatherApi:WeatherApiService) {

    this.weatherApi.getData().subscribe(data=>{
      console.log(data);
      this.data = data;
    })
  }
  ngOnInit(): void {
  }

}
