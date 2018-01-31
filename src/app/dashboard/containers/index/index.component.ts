import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../../hero';
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

  constructor(
    private tourOfHeroesState: Store<TourOfHeroesState>
  ) { }

  ngOnInit() {
    this.heroes = this.tourOfHeroesState.select(getAllHeroes);
    this.tourOfHeroesState.dispatch(new LoadHeroes);
  }

}
