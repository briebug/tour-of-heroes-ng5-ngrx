import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap } from 'rxjs/operators';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import {
  ADD_HERO, AddHero, AddHeroSuccess,
  DELETE_HERO, DeleteHero, DeleteHeroSuccess, LOAD_HERO, LOAD_HEROES, LoadHero,
  LoadHeroesSuccess, LoadHeroSuccess, UPDATE_HERO, UpdateHero, UpdateHeroSuccess
} from './heroes.actions';

@Injectable()
export class HeroesEffects {

  @Effect()
  addHero: Observable<Action> = this.actions.ofType(ADD_HERO)
    .pipe(
      map((action: AddHero) => action.payload),
      switchMap(payload => this.service.save(payload)),
      map((hero: Hero) => new AddHeroSuccess(hero))
    );

  @Effect()
  deleteHero: Observable<Action> = this.actions.ofType(DELETE_HERO)
    .pipe(
      map((action: DeleteHero) => action.payload),
      switchMap(payload => this.service.delete(payload)),
      map((hero: Hero) => new DeleteHeroSuccess(hero))
    );

  @Effect()
  getHeroes: Observable<Action> = this.actions.ofType(LOAD_HEROES)
    .pipe(
      switchMap(() => this.service.getHeroes()),
      map((heroes: Hero[]) => new LoadHeroesSuccess(heroes)
      )
    );

  @Effect()
  loadHero: Observable<Action> = this.actions.ofType(LOAD_HERO)
    .pipe(
      map((action: LoadHero) => action.payload),
      switchMap(payload => this.service.getHero(payload.id)),
      map((hero: Hero) => new LoadHeroSuccess(hero))
    );

  @Effect()
  updateHero: Observable<Action> = this.actions.ofType(UPDATE_HERO)
    .pipe(
      map((action: UpdateHero) => action.payload),
      switchMap(payload => this.service.save(payload)),
      map((hero: Hero) => new UpdateHeroSuccess(hero))
    );


  constructor(
    private actions: Actions,
    private service: HeroService)  { }

}
