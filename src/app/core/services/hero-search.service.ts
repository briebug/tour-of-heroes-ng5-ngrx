import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Hero } from '../models/hero';


@Injectable()
export class HeroSearchService {
  constructor(private httpClient: HttpClient) { }

  search(term: string): Observable<Hero[]> {
    return this.httpClient
      .get(`app/heroes/?name=${term}`)
      .map((response) => response as Hero[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
