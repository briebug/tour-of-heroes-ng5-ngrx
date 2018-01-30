import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { AppState } from './app.interfaces';
import { reducer as heroesReducer } from './heroes/heroes.reducers';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  heroes: heroesReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
