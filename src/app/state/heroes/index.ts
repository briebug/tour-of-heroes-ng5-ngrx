import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeroes from './heroes.reducers';
import { State as HeroesState } from './heroes.reducers';

export const getHeroesState = createFeatureSelector<HeroesState>('heroes');

export const getHeroesEntityState = createSelector(
  getHeroesState,
  state => state
);

export const {
  selectAll: getAllHeroes,
  selectEntities: getHeroEntities,
  selectIds: getHeroIds,
  selectTotal: getHeroesTotal,
} = fromHeroes.adapter.getSelectors(getHeroesEntityState);

export const getSelectedHeroId = createSelector(
  getHeroesEntityState,
  fromHeroes.getSelectedHeroId
);
