import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RawgApiService } from '../../rawg-api.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss'],
})
export class PlatformsComponent {
  platformParents$: Observable<any>;

  constructor(private rawgApiService: RawgApiService) {
    this.platformParents$ = this.rawgApiService.getPlatformParents();
  }
}
