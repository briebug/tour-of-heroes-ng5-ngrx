import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Hero } from '../../core/models/hero';
import { HeroActionTypes, HeroesActions } from './heroes.actions';

export interface State extends EntityState<Hero> {
  selectedHeroId: number | null;
  addingHero: boolean;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

const initialState: State = adapter.getInitialState({
  selectedHeroId: null,
  addingHero: false
});

export function reducer(state: State = initialState, action: HeroesActions) {
  switch (action.type) {
    case HeroActionTypes.ADD_HERO_SUCCESS:
      // console.log(`ADD_HERO_SUCCESS reducer = ${action.payload.id}`);
      state = { ...state, selectedHeroId: action.payload.id, addingHero: false };
      return adapter.addOne(action.payload, state);

    case HeroActionTypes.ADDING_HERO:
      // console.log(`ADDING_HERO reducer = ${action.payload.isAdding}`);
      return { ...state, selectedHeroId: null, addingHero: action.payload.isAdding };

    case HeroActionTypes.DELETE_HERO_SUCCESS:
      // console.log(`DELETE_HERO_SUCCESS reducer = ${action.payload.id}`);
      state = { ...state, selectedHeroId: null, addingHero: false };
      return adapter.removeOne(action.payload.id, state);

    case HeroActionTypes.LOAD_HERO_SUCCESS:
      // console.log(`LOAD_HERO_SUCCESS reducer = ${action.payload.id}`);
      state = { ...state, selectedHeroId: action.payload.id, addingHero: false };
      return adapter.addOne(action.payload, state);

    case HeroActionTypes.LOAD_HEROES_SUCCESS:
      // console.log(`LOAD_HEROES_SUCCESS COUNT reducer = ${action.payload.length}`);
      state = { ...state, selectedHeroId: null, addingHero: false };
      return adapter.addAll(action.payload, state);

    case HeroActionTypes.SELECT_HERO:
      // console.log(`SELECT_HERO reducer = ${action.payload.id}`);
      return { ...state, selectedHeroId: action.payload.id, addingHero: false };

    case HeroActionTypes.UPDATE_HERO_SUCCESS:
      // console.log(`UPDATE_HERO_SUCCESS reducer = ${action.payload.id}`);
      state = { ...state, selectedHeroId: action.payload.id, addingHero: false };
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

    default:
      return state;
  }
}

export const getSelectedHeroId = (state: State) => state.selectedHeroId;
export const isHeroBeingAdded = (state: State) => state.addingHero;
