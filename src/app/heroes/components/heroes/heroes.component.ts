import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../../core/models/hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[];
  @Input() addingHero: boolean;
  @Input() selectedHero: Hero;
  @Output() selectedHeroEvent = new EventEmitter<Hero>();
  @Output() addingHeroEvent = new EventEmitter<boolean>();
  @Output() heroAddedEvent = new EventEmitter<Hero>();
  @Output() heroDeletedEvent = new EventEmitter<Hero>();
  showNgFor = false;
  selectedHeroId: number;
  newHero: Hero;
  error: string;
  addError: string;

  constructor(private router: Router) {
    this.newHero = new Hero();
    this.newHero.id = 0;
    this.newHero.name = '';
    this.error = '';
  }

  addHero(): void {
    // Tell the store that we're going to add a hero
    this.addingHeroEvent.emit(!this.addingHero);
  }

  close(savedHero: Hero): void {
    // this.store.dispatch(new addingHeroEvent({isAdding: false}));
    this.addingHeroEvent.emit(false);
    if (savedHero) {
      // this.store.dispatch(new AddHero(savedHero));
      this.heroAddedEvent.emit(savedHero);
    }
    this.error = '';
  }

  onBackClick() {
    this.addingHeroEvent.emit(false);
    this.error = '';
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroDeletedEvent.emit(hero);
    this.error = '';
  }

  goTodetail(): void {
    this.router.navigate(['/hero', this.selectedHeroId]);
  }

  ngOnInit(): void {
    this.addingHero = false;
  }

  onSelect(hero: Hero): void {
    this.selectedHeroId = hero.id;
    this.selectedHeroEvent.emit(hero);
    if (this.addingHero) {
      this.addingHeroEvent.emit(false);
    }
  }

  onError(err: any) {
    this.error = err;
  }
}
