import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  key:string = 'e7105efd1ac072';
  constructor(private http: HttpClient) { }


  public getIPAddress()  
  {  
    return this.http.get("https://api.ipify.org/?format=json");  
  }  

  getLocation(ip:any){
    let url="https://ipinfo.io/"+ip+"?token=e7105efd1ac072";
    return this.http.get(url);
  }

}
