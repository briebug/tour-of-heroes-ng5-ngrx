import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Sidekick } from '../../../core/models/sidekick';
import { TourOfHeroesState } from '../../../state/app.interfaces';
import { getAllSidekicks } from 'app/+sidekicks/state';
import { LoadSidekicks } from '../../state/sidekicks.actions';

@Component({
  selector: 'my-sidekicks',
  templateUrl: './sidekicks.component.html',
  styleUrls: ['./sidekicks.component.css']
})
export class SidekicksComponent implements OnInit {

  sidekicks: Observable<Sidekick[]>;

  constructor(
    private store: Store<TourOfHeroesState>
  ) { }

  ngOnInit() {
    this.sidekicks = this.store.select(getAllSidekicks);
    this.store.dispatch(new LoadSidekicks);
  }

}
