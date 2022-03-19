import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})



export class DaysComponent implements OnInit {

  
  weather:any;
  location:any;
  ip:any;
  city:any = "api not working properly";
  constructor(private weatherApi:WeatherApiService , private locationService:LocationService) {

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
