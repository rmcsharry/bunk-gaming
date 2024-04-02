import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from './developers/developers.component';
import { HomeComponent } from './home/home.component';
import { PlatformGamesComponent } from './platform-games/platform-games.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'platforms',
    component: PlatformsComponent,
  },
  {
    path: 'developers',
    component: DevelopersComponent,
  },
  {
    path: 'platforms/:id/:slug', component: PlatformGamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
