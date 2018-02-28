import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromHeroes from "./heroes.reducers";
import { State as HeroesState } from "./heroes.reducers";

export const getHeroesState = createFeatureSelector<HeroesState>("heroes");

export const {
  selectAll: getAllHeroes,
  selectEntities: getHeroEntities,
  selectIds: getHeroIds,
  selectTotal: getHeroesTotal
} = fromHeroes.adapter.getSelectors(getHeroesState);

export const getSelectedHeroId = createSelector(
  getHeroesState,
  fromHeroes.getSelectedHeroId
);

export const getError = createSelector(getHeroesState, fromHeroes.getError);

export const getLoading = createSelector(getHeroesState, fromHeroes.getLoading);

export const getTop5Heroes = createSelector(getAllHeroes, heroes =>
  heroes.slice(1, 5)
);
