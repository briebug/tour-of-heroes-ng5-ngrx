import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Array<Hero>> {
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .map((response) => {
        return response as Hero[];
      });
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
      .map(heroes => heroes.find(hero => hero.id === id));
  }

  save(hero: Hero): Observable<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.httpClient.delete<void>(url)
      .switchMap(() => of(hero));
  }

  // Add new Hero
  private post(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(this.heroesUrl, hero);
  }

  // Update existing Hero
  private put(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.httpClient
      .put(url, hero)
      .switchMap(() => of(hero));
  }
}
