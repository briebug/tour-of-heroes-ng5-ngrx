import { Action } from '@ngrx/store';
import { Hero } from '../../core/models/hero';
import { createActionType } from '../shared/utils';

export enum HeroActionTypes {
  ADD_HERO = 'ADD_HERO',
  ADD_HERO_SUCCESS = 'ADD_HERO_SUCCESS',
  ADDING_HERO = 'ADDING_HERO',
  LOAD_HEROES = 'LOAD_HEROES',
  LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS',
  LOAD_HERO = 'LOAD_HERO',
  LOAD_HERO_SUCCESS = 'LOAD_HERO_SUCCESS',
  LOAD_TOP_HEROES = 'LOAD_TOP_HEROES',
  LOAD_TOP_HEROES_SUCCESS = 'LOAD_TOP_HEROES_SUCCESS',
  SELECT_HERO = 'SELECT_HERO',
  UPDATE_HERO = 'UPDATE_HERO',
  UPDATE_HERO_SUCCESS = 'UPDATE_HERO_SUCCESS',
  DELETE_HERO = 'DELETE_HERO',
  DELETE_HERO_SUCCESS = 'DELETE_HERO_SUCCESS'
}

export class AddHero implements Action {
  readonly type = HeroActionTypes.ADD_HERO;

  constructor(public payload: Hero) {
  }
}

export class AddHeroSuccess implements Action {
  readonly type = HeroActionTypes.ADD_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}

export class AddingHero implements Action {
  readonly type = HeroActionTypes.ADDING_HERO;

  constructor(public payload: { isAdding: boolean }) {
  }
}

export class LoadHeroes implements Action {
  readonly type = HeroActionTypes.LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = HeroActionTypes.LOAD_HEROES_SUCCESS;

  constructor(public payload: Hero[]) {
  }
}

export class LoadHero implements Action {
  readonly type = HeroActionTypes.LOAD_HERO;

  constructor(public payload: { id: number }) {
  }
}

export class LoadHeroSuccess implements Action {
  readonly type = HeroActionTypes.LOAD_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}

export class LoadTopHeroes implements Action {
  readonly type = HeroActionTypes.LOAD_TOP_HEROES;
}

export class LoadTopHeroesSuccess implements Action {
  readonly type = HeroActionTypes.LOAD_TOP_HEROES_SUCCESS;

  constructor(public payload: Hero[]) {
  }
}

export class SelectHero implements Action {
  readonly type = HeroActionTypes.SELECT_HERO;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateHero implements Action {
  readonly type = HeroActionTypes.UPDATE_HERO;

  constructor(public payload: Hero) {
  }
}

export class UpdateHeroSuccess implements Action {
  readonly type = HeroActionTypes.UPDATE_HERO_SUCCESS;

  constructor(public payload: Hero) {
  }
}

export class DeleteHero implements Action {
  readonly type = HeroActionTypes.DELETE_HERO;

  constructor(public payload: Hero) {
  }
}

export class DeleteHeroSuccess implements Action {
  readonly type = HeroActionTypes.DELETE_HERO_SUCCESS;

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
