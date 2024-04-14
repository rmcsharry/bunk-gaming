import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { DeveloperGamesComponent } from './developer-games/developer-games.component';
import { PlatformGamesComponent } from 'src/app/platform-games/platform-games.component';
import { GameListComponent } from 'src/app/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformsComponent,
    DevelopersComponent,
    DeveloperGamesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, PlatformGamesComponent, GameListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
