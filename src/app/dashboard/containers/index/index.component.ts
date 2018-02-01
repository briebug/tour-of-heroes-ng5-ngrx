import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../../../core/models/hero';
import { HeroSearchService } from '../../../core/services/hero-search.service';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { getAllHeroes } from '../../../state/heroes';
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
    private tourOfHeroesState: Store<TourOfHeroesState>,
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.tourOfHeroesState.select(getAllHeroes);
    this.tourOfHeroesState.dispatch(new LoadHeroes);
  }

  onSearch(searchTerm: string) {
    this.searchResults = this.heroSearchService.search(searchTerm);
  }

  onSelectedSearchItem(heroId: number) {
    const link = ['/detail', heroId];
    this.router.navigate(link);
  }
}
