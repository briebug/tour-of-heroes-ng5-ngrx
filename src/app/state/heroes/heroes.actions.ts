import { Action } from '@ngrx/store';
import { Hero } from '../../hero';
import { createActionType } from '../shared/utils';

export const LOAD_HEROES = createActionType('LOAD_HEROES');
export const LOAD_HEROES_SUCCESS = createActionType('LOAD_HEROES_SUCCESS');

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: Hero[]) {
  }
}

export type HeroesActions =
  LoadHeroes
  | LoadHeroesSuccess;
