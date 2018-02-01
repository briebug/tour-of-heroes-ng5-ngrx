import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../../../core/models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'my-top-heroes-list',
  templateUrl: './top-heroes-list.component.html',
  styleUrls: ['./top-heroes-list.component.css']
})
export class TopHeroesListComponent implements OnInit, OnChanges {

  @Input() heroes: Hero[];
  topHeroes: Hero[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.topHeroes = this.heroes.slice(1, 5);
  }

  goToDetail(hero: Hero) {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
