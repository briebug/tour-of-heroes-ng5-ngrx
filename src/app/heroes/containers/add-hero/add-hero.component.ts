import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../../../hero';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { AddHero } from '../../../state/heroes/heroes.actions';

@Component({
  selector: 'my-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  hero: Observable<Hero>;

  constructor(
    private store: Store<TourOfHeroesState>
  ) { }

  ngOnInit() {
    this.hero = of<Hero>();
  }

  onSave(hero: Hero) {
    this.store.dispatch(new AddHero(hero));
  }

}
