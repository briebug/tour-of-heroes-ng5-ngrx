import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '@state/heroes/heroes.model';

@Component({
  selector: 'my-top-heroes-list',
  templateUrl: './top-heroes-list.component.html',
  styleUrls: ['./top-heroes-list.component.css']
})
export class TopHeroesListComponent {
  @Input() heroes: Hero[];
  @Output() heroClick = new EventEmitter<Hero>();

  constructor() { }
}
