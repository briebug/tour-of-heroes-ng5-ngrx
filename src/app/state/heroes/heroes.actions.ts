import { Action } from '@ngrx/store';
import { Hero } from '../../hero';

export enum HeroActionTypes {
  LOAD_HEROES = 'LOAD_HEROES',
  LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS',
  LOAD_HEROES_FAIL = 'LOAD_HEROES_FAIL'
}

export class LoadHeroes implements Action {
  readonly type = HeroActionTypes.LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = HeroActionTypes.LOAD_HEROES_SUCCESS;
  constructor(public payload: Hero[]) {}
}

export class LoadHeroesFail implements Action {
  readonly type = HeroActionTypes.LOAD_HEROES_FAIL;
  constructor(public error: any) {}
}

export type HeroesActions = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail;
