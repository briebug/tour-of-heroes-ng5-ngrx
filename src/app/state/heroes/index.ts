import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeroes from './heroes.reducers';
import { State as HeroesState } from './heroes.reducers';
import { Hero } from './heroes.model';

export const getHeroesState = createFeatureSelector<HeroesState>('heroes');

export const getHeroesEntityState = createSelector(
  getHeroesState,
  state => state.entities
);

export const {
  selectAll: getAllHeroes,
  selectEntities: getHeroEntities,
  selectIds: getHeroIds,
  selectTotal: getHeroesTotal,
} = fromHeroes.adapter.getSelectors(getHeroesState);

export const getSelectedHeroId = createSelector(
  getHeroesState,
  fromHeroes.getSelectedHeroId
);

export const getIsHeroLoading = createSelector(
  getHeroesState,
  fromHeroes.loading
);

export const getHeroError = createSelector(
  getHeroesState,
  fromHeroes.error
);

export const getSelectedHero = createSelector(
  getHeroesEntityState,
  getSelectedHeroId,
  (entities, selectedHeroId) => {
    return entities && entities[selectedHeroId]
  }
);

export const getTop4Heroes = createSelector(
  getAllHeroes,
  (heroes: Hero[]) => heroes.slice(0, 4)
);
