import { RouterReducerState } from '@ngrx/router-store';
import { State as heroesState } from './heroes/heroes.reducers';
import { RouterStateUrl } from './shared/utils';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>
  heroes: heroesState
}

export type TourOfHeroesState = AppState | heroesState;