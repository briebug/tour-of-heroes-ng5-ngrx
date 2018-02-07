import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Sidekick } from '../models/sidekick';


@Injectable()
export class SidekickService {
  private sidekicksUrl = 'app/sidekicks';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getSidekicks(): Observable<Array<Sidekick>> {
    return this.httpClient
      .get<Sidekick[]>(this.sidekicksUrl)
      .map((response) => {
        return response as Sidekick[];
      });
  }

  getHeroSidekicks(id: number): Observable<Sidekick[]> {
    return this.getSidekicks()
      .map(sidekicks => sidekicks.filter(sidekick => sidekick.heroId === id));
  }

  getSidekick(id: number) : Observable<Sidekick> {
    return this.getSidekicks()
      .map(sidekicks => sidekicks.find(sidekick => sidekick.id === id));
  }

  save(sidekick: Sidekick): Observable<Sidekick> {
    if (sidekick.id) {
      return this.put(sidekick);
    }
    return this.post(sidekick);
  }

  delete(sidekick: Sidekick): Observable<Sidekick> {
    const url = `${this.sidekicksUrl}/${sidekick.id}`;

    return this.httpClient.delete<void>(url)
      .switchMap(() => of(sidekick));
  }

  // Add new Sidekick
  private post(sidekick: Sidekick): Observable<Sidekick> {
    // Only post the name and heroId properties so the in-memory service will
    //  assign a new ID
    return this.httpClient
      .post<Sidekick>(this.sidekicksUrl, { heroId: sidekick.heroId, name: sidekick.name });
  }

  // Update existing Sidekick
  private put(sidekick: Sidekick): Observable<Sidekick> {
    const url = `${this.sidekicksUrl}/${sidekick.id}`;

    return this.httpClient
      .put(url, sidekick)
      .switchMap(() => of(sidekick));
  }
}
