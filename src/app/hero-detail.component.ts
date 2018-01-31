import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, share, switchMap, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { TourOfHeroesState } from './state/app.interfaces';
import { getSelectedHero } from './state/heroes';
import { LoadHero, SelectHero } from './state/heroes/heroes.actions';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,
    // private store: TourOfHeroesState,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.hero = this.route.paramMap
    //   .pipe(
    //     tap(paramMap => {
    //       this.store.dispatch(new SelectHero({id: Number(paramMap.get('id'))}));
    //       this.hasHeroInStore()
    //         .subscribe(
    //           inStore => {
    //             if (!inStore) {
    //               this.store.dispatch(new LoadHero({id: parseInt(paramMap.get('id'))}))
    //             }
    //           }
    //         )
    //     }),
    //     switchMap(() => this.store.select(getSelectedHero))
    //     , catchError((err, caught) => {
    //       debugger;
    //       console.log(err);
    //       return Observable.of<Hero>();
    //     })
    //     , share()
    //   );

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  save(): void {
    this.heroService
        .save(this.hero)
        .map(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}
