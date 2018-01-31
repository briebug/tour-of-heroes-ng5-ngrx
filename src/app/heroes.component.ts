// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
//
// import { Hero } from './hero';
// import { TourOfHeroesState } from './state/app.interfaces';
// import { getAllHeroes, getIsHeroBeingAdded, getSelectedHero, getSelectedHeroId } from './state/heroes';
// import { AddHero, AddingHero, DeleteHero, LoadHeroes, SelectHero } from './state/heroes/heroes.actions';
//
// @Component({
//   selector: 'my-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {
//   heroes: Hero[];
//   heroesObservable: Observable<Hero[]>;
//   selectedHero: Hero;
//   selectedHeroObservable: Observable<Hero>;
//   selectedHeroId: number;
//   selectedHeroIdObservable: Observable<number>;
//   addingHero = false;
//   addingHeroObservable: Observable<boolean>;
//   error: any;
//   showNgFor = false;
//
//   constructor(private router: Router,
//               private store: Store<TourOfHeroesState>) {
//   }
//
//   getHeroes(): void {
//     this.heroesObservable = this.store.select(getAllHeroes);
//     this.selectedHeroObservable = this.store.select(getSelectedHero);
//     this.selectedHeroIdObservable = this.store.select(getSelectedHeroId);
//     this.addingHeroObservable = this.store.select(getIsHeroBeingAdded);
//
//     this.store.dispatch(new LoadHeroes);
//
//     // This observable will update the list of heroes when a hero is added or deleted
//     this.heroesObservable
//       .catch(err => {
//         console.log(`Error in heroesObservable - ${err}`);
//         return of(err);
//       })
//       .subscribe(heroes => this.heroes = heroes);
//
//     // This observable will update when the selected hero is changed in the store
//     this.selectedHeroObservable
//       .catch(err => {
//         console.log(`Error in selectedHeroObservable - ${err}`);
//         return of(err);
//       })
//       .subscribe(
//         selectedHero => {
//           this.selectedHero = selectedHero;
//         }
//       );
//
//     // This observable will update when the selected hero id is changed in the store
//     this.selectedHeroIdObservable
//       .catch(err => {
//         console.log(`Error in selectedHeroIdObservable - ${err}`);
//         return of(err);
//       })
//       .subscribe(
//         heroId => {
//           this.selectedHeroId = heroId;
//         }
//       );
//
//     // This observable will update based on the state rules in the reducer
//     this.addingHeroObservable
//       .catch(err => {
//         console.log(`Error in addingHeroObservable - ${err}`);
//         return of(err);
//       })
//       .subscribe(
//         isAdding => this.addingHero = isAdding
//       );
//   }
//
//   addHero(): void {
//     // Tell the store that we're going to add a hero
//     this.store.dispatch(new AddingHero({isAdding: true}));
//   }
//
//   close(savedHero: Hero): void {
//     this.store.dispatch(new AddingHero({isAdding: false}));
//     console.log(`savedHero = ${savedHero.name}`);
//     if (savedHero) {
//       this.store.dispatch(new AddHero(savedHero));
//       // this.getHeroes();
//     }
//   }
//
//   deleteHero(hero: Hero, event: any): void {
//     event.stopPropagation();
//     // All we have to do is dispatch the delete action
//     // Everything else will update based on the subscriptions that we've already set up
//     this.store.dispatch(new DeleteHero(hero));
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedHero.id]);
//   }
//
//   ngOnInit(): void {
//     this.getHeroes();
//   }
//
//   onSelect(hero: Hero): void {
//     // Dispatch the action to set the new selected hero id
//     this.store.dispatch(new SelectHero(hero));
//
//     if (this.addingHero) {
//       this.store.dispatch(new AddingHero({isAdding: false}));
//     }
//   }
// }
