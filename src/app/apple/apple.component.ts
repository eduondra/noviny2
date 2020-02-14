import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  
  private articles = [];
  private url = "https://newsapi.org/v2/everything?q=apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=1f822e3a8be14d43a008bcb21d7d00c5";

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    this.httpClient
    .get(this.url)
    .subscribe(
      (data: any) => {
        this.articles = data['articles'];
        console.log(this.articles);
      }, (error) => {

      }
    );
  }

}
