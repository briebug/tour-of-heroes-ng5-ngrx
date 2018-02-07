import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Sidekick } from '../../core/models/sidekick';
import { SidekickActionTypes, SidekicksActions } from './sidekicks.actions';


export interface State extends EntityState<Sidekick> {
  selectedSidekickId: number | null;
  addingSidekick: boolean;
}

export const adapter: EntityAdapter<Sidekick> = createEntityAdapter<Sidekick>();

const initialState: State = adapter.getInitialState({
  selectedSidekickId: null,
  addingSidekick: false
});

export function reducer(state: State = initialState, action: SidekicksActions) {
  switch (action.type) {
    case SidekickActionTypes.LOAD_HERO_SIDEKICKS_SUCCESS:
      state = { ...state, selectedSidekickId: null, addingSidekick: false };
      return adapter.addMany(action.payload, state);

    case SidekickActionTypes.LOAD_SIDEKICKS_SUCCESS:
      state = { ...state, selectedSidekickId: null, addingSidekick: false };
      return adapter.addMany(action.payload, state);

    case SidekickActionTypes.LOAD_SIDEKICK_SUCCESS:
      state = { ...state, selectedSidekickId: action.payload.id, addingSidekick: false };
      return adapter.addOne(action.payload, state);

    default:
      return state;
  }
}

export const getSelectedSidekickId = (state: State) => state.selectedSidekickId;
export const isSidekickBeingAdded = (state: State) => state.addingSidekick;
