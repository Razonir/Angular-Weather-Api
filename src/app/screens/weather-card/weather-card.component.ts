import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { LocationService } from 'src/app/services/location.service';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {




  
  weather:any;
  location:any;
  ip:any;
  city:any;
  news:any;
  firstnews:any;
  firstnewsshort:any;
  secnews:any;
  secnewsshort:any;

  constructor(private weatherApi:WeatherApiService , private locationService:LocationService, private newsService:NewsService) {

    this.locationService.getIPAddress().subscribe(ip=>{
      this.ip = ip;
      this.ip = this.ip.ip.toString()
      this.locationService.getLocation(this.ip).subscribe(location=>{
        this.location = location;
        this.city = this.location.city;
        this.weatherApi.getData(this.city).subscribe(weather=>{
          this.weather = weather;
          console.log(weather);
        })
      })
    })

    this.newsService.getNews().subscribe(news=>{
      this.news = news;
      console.log(this.news);
      this.firstnews = this.news.articles[0].description
      this.firstnewsshort = JSON.stringify(this.firstnews).substring(0,100) + "..."
      this.secnews = this.news.articles[1].description
      this.secnewsshort = JSON.stringify(this.secnews).substring(0,100) + "..."
    })

  }
  ngOnInit(): void {
  }


  
}
