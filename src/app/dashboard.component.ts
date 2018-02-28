import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { TourOfHeroesState } from './state/app.interfaces';
import { LoadHeroes } from './state/heroes/heroes.actions';
import * as fromHeroes from './state/heroes';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  top5Heroes$: Observable<Hero[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private router: Router, private store: Store<TourOfHeroesState>) {
    this.store.dispatch(new LoadHeroes());

    this.top5Heroes$ = this.store.select(fromHeroes.getTop5Heroes);
    this.loading$ = store.pipe(select(fromHeroes.getLoading));
    this.error$ = store.pipe(select(fromHeroes.getError));
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
