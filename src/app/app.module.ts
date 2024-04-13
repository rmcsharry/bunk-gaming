import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { DeveloperGamesComponent } from './developer-games/developer-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformsComponent,
    DevelopersComponent,
    DeveloperGamesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
