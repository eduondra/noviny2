import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BusinessComponent } from './business/business.component';
import { AppleComponent } from './apple/apple.component';
import { TechComponent } from './tech/tech.component';
import { WallstreetComponent } from './wallstreet/wallstreet.component';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    BusinessComponent,
    AppleComponent,
    TechComponent,
    WallstreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
