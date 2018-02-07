import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../state/app.interfaces';
import { getHeroesEntityState, getSelectedHeroId } from '../../state/heroes';
import * as fromSidekicks from './sidekicks.reducers';
import { State as SidekicksState } from './sidekicks.reducers';

export interface SidekicksState {
  sidekicks: fromSidekicks.State;
}

export interface State extends AppState {
  sidekicks: SidekicksState;
}

export const reducers = {
  sidekicks: fromSidekicks.reducer
};

export const getSidekicksState = createFeatureSelector<SidekicksState>('sidekicks');

export const getSidekicksEntityState = createSelector (
  getSidekicksState,
  state => state.entities
);

export const {
  selectAll: getAllSidekicks,
  selectEntities: getSidekickEntities,
  selectIds: getSidekickIds,
  selectTotal: getSidekicksTotal
} = fromSidekicks.adapter.getSelectors(getSidekicksState);

export const getSelectedSidekickId = createSelector (
  getSidekicksState,
  fromSidekicks.getSelectedSidekickId
);

export const getSelectedSidekick = createSelector (
  getSidekicksEntityState,
  getSelectedSidekickId,
  (entities, selectedSidekickId) => {
    return entities && entities[selectedSidekickId]
  }
);

export const getSidekicksForSelectedHero = createSelector(
  getAllSidekicks,
  getSelectedHeroId,
  (sidekicks, heroId) => {
    console.log(`getSidekicksForSelectedHero, heroid = ${heroId}, sidekicks = ${sidekicks.length}`);
    return sidekicks.filter(sidekick => sidekick.heroId === heroId);
  }
);
