import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Hero } from '@state/heroes/heroes.model';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { getAllHeroes, getTop4Heroes } from '../../../state/heroes';
import { LoadHeroes } from '../../../state/heroes/heroes.actions';

@Component({
  selector: 'my-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  heroes: Observable<Array<Hero>>;
  searchResults: Observable<Array<Hero>>;

  constructor(
    private store: Store<TourOfHeroesState>
  ) {
    this.store.dispatch(new LoadHeroes);
  }

  ngOnInit() {
    this.heroes = this.store.pipe(select(getTop4Heroes));
  }

  onHeroClick(hero: Hero) {
    console.log('hero', hero);
  }
}
