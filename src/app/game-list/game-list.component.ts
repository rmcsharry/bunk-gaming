import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../rawg-api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from 'src/app/game-card/game-card.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  imports: [CommonModule, RouterModule, GameCardComponent],
  standalone: true
})
export class GameListComponent {
  @Input() games$: Observable<Game[]> = new Observable<Game[]>();

}
