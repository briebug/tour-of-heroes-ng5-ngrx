import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap } from 'rxjs/operators';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { LOAD_HEROES, LoadHeroesSuccess } from './heroes.actions';

@Injectable()
export class HeroesEffects {

  @Effect()
  getHeroes: Observable<Action> = this.actions.ofType(LOAD_HEROES)
    .pipe(
      tap(() => console.log('getHeroes effect start')),
      switchMap(() => this.service.getHeroes()),
      tap((heroes: Hero[]) => console.log(`getHeroes effect total = ${heroes.length}`)),
      map((heroes: Hero[]) => new LoadHeroesSuccess(heroes)
      )
    );

  constructor(
    private actions: Actions,
    private service: HeroService)  { }

}
