import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../../core/models/hero';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { getAllHeroes, getIsHeroBeingAdded, getSelectedHero, getSelectedHeroId } from '../../../state/heroes';
import { AddHero, AddingHero, DeleteHero, LoadHeroes, SelectHero } from '../../../state/heroes/heroes.actions';

@Component({
  selector: 'my-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  implements OnInit {
  heroesObservable: Observable<Hero[]>;
  selectedHeroObservable: Observable<Hero>;
  selectedHeroIdObservable: Observable<number>;
  addingHeroObservable: Observable<boolean>;
  error: any;

  constructor(
    private router: Router,
    private store: Store<TourOfHeroesState>) {
  }

  getHeroes(): void {
    this.heroesObservable = this.store.select(getAllHeroes);
    this.selectedHeroObservable = this.store.select(getSelectedHero);
    this.selectedHeroIdObservable = this.store.select(getSelectedHeroId);
    this.addingHeroObservable = this.store.select(getIsHeroBeingAdded);
    this.store.dispatch(new LoadHeroes);
  }

  onHeroAdded(hero: Hero) {
    this.store.dispatch(new AddHero(hero));
  }

  onHeroDeleted(hero: Hero) {
    this.store.dispatch(new DeleteHero(hero));
  }

  onAddingHero(adding: boolean) {
    this.store.dispatch(new AddingHero({isAdding: adding}));
  }

  onSelectedHero(hero: Hero) {
    this.store.dispatch(new SelectHero({id: hero.id}));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
