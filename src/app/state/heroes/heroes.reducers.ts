import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from '../../hero';
import {
  ADD_HERO_SUCCESS, DELETE_HERO_SUCCESS, HeroesActions, LOAD_HERO_SUCCESS, LOAD_HEROES_SUCCESS, SELECT_HERO,
  UPDATE_HERO_SUCCESS
} from './heroes.actions';

export interface State extends EntityState<Hero> {
  selectedHeroId: number | null;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

const initialState: State = adapter.getInitialState({
  selectedHeroId: null
});

export function reducer(state: State = initialState, action: HeroesActions) {
  switch (action.type) {
    case ADD_HERO_SUCCESS:
      console.log(`ADD_HERO_SUCCESS = ${action.payload.id}`);
      state = { ...state, selectedHeroId: action.payload.id };
      return adapter.addOne(action.payload, state);

    case DELETE_HERO_SUCCESS:
      console.log(`DELETE_HERO_SUCCESS = ${action.payload.id}`);
      state = { ...state, selectedHeroId: null };
      return adapter.removeOne(action.payload.id, state);

    case LOAD_HERO_SUCCESS:
      console.log(`LOAD_HERO_SUCCESS = ${action.payload.id}`);
      state = { ...state, selectedHeroId: action.payload.id };
      return adapter.addOne(action.payload, state);

    case LOAD_HEROES_SUCCESS:
      console.log(`LOAD_HEROES_SUCCESS COUNT = ${action.payload.length}`);
      state = { ...state, selectedHeroId: null };
      return adapter.addAll(action.payload, state);

    case SELECT_HERO:
      console.log(`SELECT_HERO = ${action.payload.id}`);
      return { ...state, selectedHeroId: action.payload.id };

    case UPDATE_HERO_SUCCESS:
      console.log(`UPDATE_HERO_SUCCESS = ${action.payload.id}`);
      state = { ...state, selectedHeroId: action.payload.id };
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

    default:
      return state;
  }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
