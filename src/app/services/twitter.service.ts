import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  key:string = 'xmTajbgsm7W0W5zTGNkMqV9wg';
  Secret:string = 'InpF3QKpI3X99Uh0FDbN0rLCVnmSF55fMEOWmxbg8NFbCzWJBC';
  auth_token:string = 'AAAAAAAAAAAAAAAAAAAAADx3aQEAAAAAW%2F2F7sG7oG0tFyoFH16afF1kXVk%3D7XmB54l0ESxn0AZmsqW2ZFuddhoQbpbbXir8WYKYFW8nt9bAlu';

  constructor(private http:HttpClient ) {}

  
  getTwitts(){
    let url="https://api.twitter.com/2/tweets/search/recent?query=%23frontend&max_results=10";
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth_token);
    return this.http.get(url , {'headers': headers});
    
  }

  
}


