import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from './heroes.model';
import { HeroActionTypes, HeroesActions } from './heroes.actions';

export interface State extends EntityState<Hero> {
  selectedHeroId: number | null;
  addingHero: boolean;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

const initialState: State = adapter.getInitialState({
  selectedHeroId: null,
  addingHero: false,
  loading: false,
  error: ''
});

export function reducer(state: State = initialState, action: HeroesActions) {
  switch (action.type) {


    case HeroActionTypes.LoadHeroes:
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      }

    case HeroActionTypes.LoadHeroesSuccess:
      return {
        ...adapter.addAll(action.payload, state),
        loading: false
      }

    case HeroActionTypes.LoadHeroesFail:
      return {
        ...state,
        loading: false,
        error: 'Error loading heros'
      }

    default:
      return state;
  }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
export const loading = (state: State) => state.loading;
export const error = (state: State) => state.error;
