import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Game } from 'src/app/rawg-api.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class GameCardComponent {
  @Input() games: Game[] = [];
}
