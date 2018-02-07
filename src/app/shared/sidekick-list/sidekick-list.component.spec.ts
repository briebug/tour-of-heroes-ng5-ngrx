import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekickListComponent } from './sidekick-list.component';

describe('SidekickListComponent', () => {
  let component: SidekickListComponent;
  let fixture: ComponentFixture<SidekickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidekickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidekickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
