import { Action } from '@ngrx/store';
import { Hero } from '../../core/models/hero';
import { createActionType } from '../shared/utils';

export const ADD_HERO = createActionType('ADD_HERO');
export const ADD_HERO_SUCCESS = createActionType('ADD_HERO_SUCCESS');
export const ADDING_HERO = createActionType('ADDING_HERO');
export const LOAD_HEROES = createActionType('LOAD_HEROES');
export const LOAD_HEROES_SUCCESS = createActionType('LOAD_HEROES_SUCCESS');
export const LOAD_HERO = createActionType('LOAD_HERO');
export const LOAD_HERO_SUCCESS = createActionType('LOAD_HERO_SUCCESS');
export const LOAD_TOP_HEROES = createActionType('LOAD_TOP_HEROES');
export const LOAD_TOP_HEROES_SUCCESS = createActionType('LOAD_TOP_HEROES_SUCCESS');
export const SELECT_HERO = createActionType('SELECT_HERO');
export const UPDATE_HERO = createActionType('UPDATE_HERO');
export const UPDATE_HERO_SUCCESS = createActionType('UPDATE_HERO_SUCCESS');
export const DELETE_HERO = createActionType('DELETE_HERO');
export const DELETE_HERO_SUCCESS = createActionType('DELETE_HERO_SUCCESS');

export class AddHero implements Action {
  readonly type = ADD_HERO;
  constructor(public payload: Hero) {
  }
}

export class AddHeroSuccess implements Action {
  readonly type = ADD_HERO_SUCCESS;
  constructor(public payload: Hero) {
  }
}

export class AddingHero implements Action {
  readonly type = ADDING_HERO;
  constructor(public payload: { isAdding: boolean }) {
  }
}

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: Hero[]) {
  }
}

export class LoadHero implements Action {
  readonly type = LOAD_HERO;
  constructor(public payload: { id: number }) {
  }
}

export class LoadHeroSuccess implements Action {
  readonly type = LOAD_HERO_SUCCESS;
  constructor(public payload: Hero) {
  }
}

export class LoadTopHeroes implements Action {
  readonly type = LOAD_TOP_HEROES;
}

export class LoadTopHeroesSuccess implements Action {
  readonly type = LOAD_TOP_HEROES_SUCCESS;
  constructor(public payload: Hero[]) { }
}

export class SelectHero implements Action {
  readonly type = SELECT_HERO;
  constructor(public payload: { id: number }) {
  }
}

export class UpdateHero implements Action {
  readonly type = UPDATE_HERO;
  constructor(public payload: Hero) {
  }
}

export class UpdateHeroSuccess implements Action {
  readonly type = UPDATE_HERO_SUCCESS;
  constructor(public payload: Hero) {
  }
}

export class DeleteHero implements Action {
  readonly type = DELETE_HERO;
  constructor(public payload: Hero) {
  }
}

export class DeleteHeroSuccess implements Action {
  readonly type = DELETE_HERO_SUCCESS;
  constructor(public payload: Hero) {
  }
}

export type HeroesActions =
  AddHero
  | AddHeroSuccess
  | AddingHero
  | DeleteHero
  | DeleteHeroSuccess
  | LoadHero
  | LoadHeroSuccess
  | LoadHeroes
  | LoadHeroesSuccess
  | LoadTopHeroes
  | LoadTopHeroesSuccess
  | SelectHero
  | UpdateHero
  | UpdateHeroSuccess;
