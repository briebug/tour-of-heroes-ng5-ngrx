import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { TourOfHeroesState } from './state/app.interfaces';
import { LoadHeroes } from './state/heroes/heroes.actions';
import * as fromHeroes from './state/heroes';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroesObservable: Observable<Hero[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  selectedHero: Hero;
  addingHero = false;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private store: Store<TourOfHeroesState>,
    private heroService: HeroService
  ) {
    this.loading$ = store.pipe(select(fromHeroes.getLoading));
    this.error$ = store.pipe(select(fromHeroes.getError));
  }

  getHeroes(): void {
    this.store.dispatch(new LoadHeroes());

    this.heroesObservable = this.store.select(fromHeroes.getAllHeroes);
    this.heroesObservable.subscribe(heroes => (this.heroes = heroes));
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService.delete(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
