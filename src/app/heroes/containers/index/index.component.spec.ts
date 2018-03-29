import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { TopHeroesListComponent } from '../../components/top-heroes-list/top-heroes-list.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromHeroes from '@state/heroes/heroes.reducers';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let store: Store<fromHeroes.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          books: fromHeroes.reducer
        }),
      ],
      declarations: [
        IndexComponent,
        TopHeroesListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
