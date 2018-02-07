import { Action } from '@ngrx/store';
import { Sidekick } from '../../core/models/sidekick';

export enum SidekickActionTypes {
  LOAD_SIDEKICK = 'LOAD_SIDEKICK',
  LOAD_SIDEKICK_SUCCESS = 'LOAD_SIDEKICK_SUCCESS',
  LOAD_SIDEKICKS = 'LOAD_SIDEKICKS',
  LOAD_SIDEKICKS_SUCCESS = 'LOAD_SIDEKICKS_SUCCESS',
  LOAD_HERO_SIDEKICKS = 'LOAD_HERO_SIDEKICKS',
  LOAD_HERO_SIDEKICKS_SUCCESS = 'LOAD_HERO_SIDEKICKS_SUCCESS'
}

export class LoadSidekick implements Action {
  readonly type = SidekickActionTypes.LOAD_SIDEKICK;

  constructor(public payload: { id: number }) {
  }
}

export class LoadSidekickSuccess implements Action {
  readonly type = SidekickActionTypes.LOAD_SIDEKICK_SUCCESS;

  constructor(public payload: Sidekick) {
  }
}

export class LoadSidekicks implements Action {
  readonly type = SidekickActionTypes.LOAD_SIDEKICKS;
}

export class LoadSidekicksSuccess implements Action {
  readonly type = SidekickActionTypes.LOAD_SIDEKICKS_SUCCESS;

  constructor(public payload: Sidekick[]) {
  }
}

export class LoadHeroSidekicks implements Action {
  readonly type = SidekickActionTypes.LOAD_HERO_SIDEKICKS;

  constructor(public payload: { heroId: number }) {
  }
}

export class LoadHeroSidekicksSuccess implements Action {
  readonly type = SidekickActionTypes.LOAD_HERO_SIDEKICKS_SUCCESS;

  constructor(public payload: Sidekick[]) {
  }
}

export type SidekicksActions =
  LoadSidekick
  | LoadSidekickSuccess
  | LoadSidekicks
  | LoadSidekicksSuccess
  | LoadHeroSidekicks
  | LoadHeroSidekicksSuccess;
