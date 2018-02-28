import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import {
  HeroActionTypes,
  LoadHeroesSuccess,
  LoadHeroesFail
} from './heroes.actions';

@Injectable()
export class HeroesEffects {
  @Effect()
  getHeroes: Observable<Action> = this.actions
    .ofType(HeroActionTypes.LOAD_HEROES)
    .pipe(
      switchMap(() => this.service.getHeroes()),
      map(
        (heroes: Hero[]) => new LoadHeroesSuccess(heroes),
        catchError(err => of(new LoadHeroesFail(err)))
      )
    );

  constructor(private actions: Actions, private service: HeroService) {}
}
