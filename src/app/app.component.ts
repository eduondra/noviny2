import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private articles = [];
  private url = "https://newsapi.org/v2/everything?q=apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=1f822e3a8be14d43a008bcb21d7d00c5\n";

  constructor(private httpClient: HttpClient) {
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
