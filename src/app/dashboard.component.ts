// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
//
// import { Hero } from './hero';
// import { TourOfHeroesState } from './state/app.interfaces';
// import { LoadHeroes } from './state/heroes/heroes.actions';
// import { getAllHeroes } from './state/heroes';
//
// @Component({
//   selector: 'my-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   heroes: Hero[];
//   heroesObservable: Observable<Hero[]>;
//
//   constructor(
//     private router: Router,
//     private store: Store<TourOfHeroesState>) {
//   }
//
//   ngOnInit(): void {
//     this.heroesObservable = this.store.select(getAllHeroes);
//     this.store.dispatch(new LoadHeroes);
//     this.heroesObservable
//       .catch(err => {
//         console.log(err);
//         return of(err);
//       })
//       .subscribe(heroes => this.heroes = heroes.slice(1, 5));
//   }
//
//   gotoDetail(hero: Hero): void {
//     const link = ['/detail', hero.id];
//     this.router.navigate(link);
//   }
// }
