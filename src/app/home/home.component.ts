import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game, RawgApiService } from '../rawg-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public games$: Observable<Game[]>;

  constructor(private rawgApiService: RawgApiService) {
    this.games$ = this.rawgApiService
      .getLatestGames()
  }

  ngOnInit(): void {}
}
