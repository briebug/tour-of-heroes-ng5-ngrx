import { Action } from '@ngrx/store';
import { Hero } from './heroes.model';

export enum HeroActionTypes {
  LoadHeroes = '[Heroes] Load',
  LoadHeroesSuccess = '[Heroes] Load Success',
  LoadHeroesFail = '[Heroes] Load Fail',
}

export class LoadHeroes implements Action {
  readonly type = HeroActionTypes.LoadHeroes;
}

export class LoadHeroesSuccess implements Action {
  readonly type = HeroActionTypes.LoadHeroesSuccess;

  constructor(public payload: Hero[]) {
  }
}

export class LoadHeroesFail implements Action {
  readonly type = HeroActionTypes.LoadHeroesFail;
}

export type HeroesActions =
  LoadHeroes
  | LoadHeroesFail
  | LoadHeroesSuccess;
