import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, first, map, share, switchMap, tap } from 'rxjs/operators';

import { Hero } from '../../../hero';
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
                  this.store.dispatch(new LoadHero({id: Number(paramMap.get('id'))}))
                }
              }
            )
        }),
        switchMap(() => this.store.select(getSelectedHero))
        , catchError((err) => {
          console.log(err);
          return of<Hero>();
        })
        , share()
      );
  }

  hasHeroInStore(): Observable<boolean> {
    return this.store.select(getSelectedHero)
      .pipe(
        first(),
        map(hero => !!hero)
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
