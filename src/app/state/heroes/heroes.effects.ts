import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

import { Hero } from '../../core/models/hero';
import { HeroService } from '../../core/services/hero.service';
import {
  AddHero,
  AddHeroSuccess,
  DeleteHero,
  DeleteHeroSuccess,
  HeroActionTypes,
  LoadHero,
  LoadHeroesSuccess,
  LoadHeroSuccess,
  UpdateHero,
  UpdateHeroSuccess
} from './heroes.actions';

@Injectable()
export class HeroesEffects {

  @Effect()
  addHero: Observable<Action> = this.actions.ofType(HeroActionTypes.ADD_HERO)
    .pipe(
      map((action: AddHero) => action.payload),
      switchMap(payload => this.service.save(payload)),
      map((hero: Hero) => new AddHeroSuccess(hero))
    );

  @Effect()
  deleteHero: Observable<Action> = this.actions.ofType(HeroActionTypes.DELETE_HERO)
    .pipe(
      map((action: DeleteHero) => action.payload),
      switchMap(payload => this.service.delete(payload)),
      map((hero: Hero) => new DeleteHeroSuccess(hero))
    );

  @Effect()
  getHeroes: Observable<Action> = this.actions.ofType(HeroActionTypes.LOAD_HEROES)
    .pipe(
      switchMap(() => this.service.getHeroes()),
      map((heroes: Hero[]) => new LoadHeroesSuccess(heroes)
      )
    );

  @Effect()
  loadHero: Observable<Action> = this.actions.ofType(HeroActionTypes.LOAD_HERO)
    .pipe(
      map((action: LoadHero) => action.payload),
      switchMap(payload => this.service.getHero(payload.id)),
      map((hero: Hero) => new LoadHeroSuccess(hero))
    );

  @Effect()
  updateHero: Observable<Action> = this.actions.ofType(HeroActionTypes.UPDATE_HERO)
    .pipe(
      map((action: UpdateHero) => action.payload),
      switchMap(payload => this.service.save(payload)),
      map((hero: Hero) => new UpdateHeroSuccess(hero))
    );


  constructor(
    private actions: Actions,
    private service: HeroService)  { }

}
