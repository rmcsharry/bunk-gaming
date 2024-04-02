import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformsComponent,
    DevelopersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
