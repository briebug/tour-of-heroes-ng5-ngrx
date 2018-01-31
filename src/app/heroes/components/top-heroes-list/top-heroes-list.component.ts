import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'my-top-heroes-list',
  templateUrl: './top-heroes-list.component.html',
  styleUrls: ['./top-heroes-list.component.css']
})
export class TopHeroesListComponent implements OnInit, OnChanges {

  @Input() heroes: Hero[];
  topHeroes: Hero[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.topHeroes = this.heroes.slice(1, 5);
  }
  gotoDetail(hero: Hero) {

  }

}
