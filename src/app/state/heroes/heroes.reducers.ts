import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from '../../hero';
import { HeroesActions, LOAD_HEROES_SUCCESS } from './heroes.actions';

export interface State extends EntityState<Hero> {
  selectedHeroId: number | null;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

const initialState: State = adapter.getInitialState({
  selectedHeroId: null
});

export function reducer(state: State = initialState, action: HeroesActions) {
  switch (action.type) {
    case LOAD_HEROES_SUCCESS: {
      return adapter.addAll(action.payload, state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
