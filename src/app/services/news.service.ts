import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  key:string = '1dd1e4e8a38f4d40a1f142730221803';
  constructor(private http: HttpClient) { }

  getNews(){
    let url="https://newsapi.org/v2/everything?q=frontend&apiKey=aaab63e519404153b467f081e6be0586";
    return this.http.get(url);
  }
}
