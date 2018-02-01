import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Hero } from '../../../hero';
import { HeroSearchService } from '../../../hero-search.service';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { getAllHeroes } from '../../../state/heroes';
import { LoadHeroes } from '../../../state/heroes/heroes.actions';

@Component({
  selector: 'my-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  heroes: Observable<Array<Hero>>;
  searchResults: Observable<Array<Hero>>;
  private searchTerms = new Subject<string>();

  constructor(
    private tourOfHeroesState: Store<TourOfHeroesState>,
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.tourOfHeroesState.select(getAllHeroes);
    this.tourOfHeroesState.dispatch(new LoadHeroes);

    // this.heroes = this.searchTerms
    //   .debounceTime(300)
    //   .distinctUntilChanged()
    //   .switchMap(term => term
    //     ? this.heroSearchService.search(term)
    //     : Observable.of<Hero[]>([]))
    //   .catch(error => {
    //     console.log(`Error in onSearch: ${error}`);
    //     return Observable.of<Hero[]>([]);
    //   });
  }

  onSearch(searchTerm: string) {
    // this.searchTerms.next(searchTerm);
  }

  onSelectedSearchItem(heroId: number) {
    const link = ['/detail', heroId];
    this.router.navigate(link);
  }

}
