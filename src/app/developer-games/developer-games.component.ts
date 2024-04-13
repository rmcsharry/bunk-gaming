import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Developer, RawgApiService } from '../rawg-api.service';

@Component({
  selector: 'app-developer-games',
  templateUrl: './developer-games.component.html',
  styleUrls: ['./developer-games.component.scss']
})
export class DeveloperGamesComponent {
  public id$: Observable<number>;
  public games$: Observable<any>;
  public developer$: Observable<Developer>;
  private route = inject(ActivatedRoute);

  constructor(private rawgApiService: RawgApiService) {
    this.id$ = this.route.params.pipe(
      map((param) => parseInt(param['id'], 10))
    );

    this.developer$ = this.id$.pipe(
      switchMap((id) => this.rawgApiService.getDeveloper(id))
    );

    this.games$ = this.id$.pipe(
      switchMap((id) => {
        return this.rawgApiService.getGamesByDeveloper(id);
      })
    );
  }
}
