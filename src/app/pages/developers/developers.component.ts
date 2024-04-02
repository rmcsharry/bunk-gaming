import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer, RawgApiService } from '../../rawg-api.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
})
export class DevelopersComponent {
  public developers$: Observable<Developer[]>;

  constructor(private rawgApiService: RawgApiService) {
    this.developers$ = this.rawgApiService.getDevelopers();
  }
}
