import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';
import { Sidekick } from '../../core/models/sidekick';
import { SidekickService } from '../../core/services/sidekick.service.ts.service';
import {
  LoadHeroSidekicks, LoadHeroSidekicksSuccess, LoadSidekick, LoadSidekicksSuccess, LoadSidekickSuccess,
  SidekickActionTypes
} from './sidekicks.actions';

@Injectable()
export class SidekicksEffects {

  @Effect()
  loadSidekicks: Observable<Action> = this.actions.ofType(SidekickActionTypes.LOAD_SIDEKICKS)
    .pipe(
      switchMap(() => this.sidekickService.getSidekicks()),
      map((sidekicks: Sidekick[]) => new LoadSidekicksSuccess(sidekicks))
    );

  @Effect()
  loadHeroSidekick: Observable<Action> = this.actions.ofType(SidekickActionTypes.LOAD_HERO_SIDEKICKS)
    .pipe(
      map((action: LoadHeroSidekicks) => action.payload),
      switchMap(payload => this.sidekickService.getHeroSidekicks(payload.heroId)),
      map((sidekicks: Sidekick[]) => new LoadHeroSidekicksSuccess(sidekicks))
    );

  // @Effect()
  // loadSidekick: Observable<Action> = this.actions.ofType(SidekickActionTypes.LOAD_SIDEKICKS_SUCCESS)
  //   .pipe(
  //     map((action: LoadSidekick) => action.payload),
  //     switchMap(payload => this.sidekickService.getSidekick(payload.id)),
  //     map((sidekick: Sidekick) => new LoadSidekickSuccess(sidekick))
  //   );

  constructor(
    private actions: Actions,
    private sidekickService: SidekickService
  ) { }
}
