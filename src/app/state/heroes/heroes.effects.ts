import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Hero } from './heroes.model';
import { HeroService } from '../../core/services/hero.service';
import {
  HeroActionTypes,
  LoadHeroesSuccess,
  LoadHeroesFail
} from './heroes.actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroesEffects {

  @Effect()
  getHeroes: Observable<Action> =
    this.actions.ofType(HeroActionTypes.LoadHeroes)
      .pipe(
        switchMap(() => this.service.getHeroes()),
        map(
          (heroes: Hero[]) => new LoadHeroesSuccess(heroes)
        )
      );

  constructor(
    private actions: Actions,
    private service: HeroService) { }

}
