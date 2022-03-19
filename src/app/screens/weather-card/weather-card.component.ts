import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {




  
  data:any;
  weather:any;
  location:any;
  ip:any;
  city:any;
  constructor( private twitterApi:TwitterService ,private weatherApi:WeatherApiService , private locationService:LocationService) {

    this.twitterApi.getTwitts().subscribe(data=>{
      this.data = data;
    })
    
    this.locationService.getIPAddress().subscribe(ip=>{
      this.ip = ip;
      this.ip = this.ip.ip.toString()
      this.locationService.getLocation(this.ip).subscribe(location=>{
        this.location = location;
        this.city = this.location.city;
        this.weatherApi.getData(this.city).subscribe(weather=>{
          this.weather = weather;
        })
      })
    })


  }
  ngOnInit(): void {
  }


  
}
