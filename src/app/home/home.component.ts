import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game, RawgApiService } from '../rawg-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public games$: Observable<Game[]>;
  public games: any[] = [];
  constructor(private rawgApiService: RawgApiService) {
    this.games$ = this.rawgApiService
      .getLatestGames()
      .pipe(tap((games) => this.showNumGames(games, games.length)));
  }
  ngOnInit(): void {}
  private showNumGames(games: any[], numGames: any) {
    this.games = games.slice(0, numGames);
  }
}
