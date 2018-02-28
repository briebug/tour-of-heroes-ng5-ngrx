import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from '../../hero';
import { HeroActionTypes, HeroesActions } from './heroes.actions';

export interface State extends EntityState<Hero> {
  selectedHeroId: number | null;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

const initialState: State = adapter.getInitialState({
  selectedHeroId: null,
  loading: false,
  error: ''
});

export function reducer(state: State = initialState, action: HeroesActions) {
  switch (action.type) {
    case HeroActionTypes.LOAD_HEROES: {
      return { ...state, loading: true, error: '' };
    }

    case HeroActionTypes.LOAD_HEROES_SUCCESS: {
      return {
        ...adapter.addAll(action.payload, state),
        loading: false
      };
    }

    case HeroActionTypes.LOAD_HEROES_FAIL: {
      return {
        ...adapter.removeAll(state),
        loading: false,
        error: 'Error loading heroes'
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
