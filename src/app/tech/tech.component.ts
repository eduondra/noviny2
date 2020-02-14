import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  
  private articles = [];
  private url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1f822e3a8be14d43a008bcb21d7d00c5";

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
