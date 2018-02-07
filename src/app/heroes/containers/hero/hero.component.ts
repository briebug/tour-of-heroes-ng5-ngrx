import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, filter, first, map, share, switchMap, tap } from 'rxjs/operators';
import { getSelectedSidekick, getSidekicksForSelectedHero } from '../../../+sidekicks/state';
import { LoadHeroSidekicks } from '../../../+sidekicks/state/sidekicks.actions';

import { Hero } from '../../../core/models/hero';
import { Sidekick } from '../../../core/models/sidekick';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { getSelectedHero } from '../../../state/heroes';
import { DeleteHero, LoadHero, SelectHero, UpdateHero } from '../../../state/heroes/heroes.actions';

@Component({
  selector: 'my-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Observable<Hero>;
  sidekicks: Observable<Array<Sidekick>>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<TourOfHeroesState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.hero = this.activatedRoute.paramMap
      .pipe(
        tap(paramMap => {
          this.store.dispatch(new SelectHero({id: Number(paramMap.get('id'))}));
          this.hasHeroInStore()
            .subscribe(
              inStore => {
                if (!inStore) {
                  console.log(paramMap.get('id'));
                  this.store.dispatch(new LoadHero({id: Number(paramMap.get('id'))}));
                }
              }
            );
        }),
        switchMap(() => this.store.select(getSelectedHero))
        , catchError((err) => {
          console.log(err);
          return of<Hero>();
        })
      );

    this.sidekicks = this.hero
      .pipe(
        filter(hero => !!hero),
        map((hero) => this.store.dispatch(new LoadHeroSidekicks({heroId: hero.id}))),
        switchMap(() => this.store.select(getSidekicksForSelectedHero)),
      );
  }

  hasHeroInStore(): Observable<boolean> {
    return this.store.select(getSelectedHero)
      .pipe(
        first(),
        tap((hero) => console.log(hero)),
        map(hero => !!hero)
      );
  }

  hasSidekickInStore(): Observable<boolean> {
    return this.store.select(getSelectedSidekick)
      .pipe(
        first(),
        map(sidekick => !!sidekick)
      );
  }

  onDelete(hero: Hero) {
    this.store.dispatch(new DeleteHero(hero));
    this.router.navigate(['/heroes']);
  }

  onSave(hero: Hero) {
    this.store.dispatch(new UpdateHero(hero));
  }

  onBackClick() {
    window.history.back();
  }
}
