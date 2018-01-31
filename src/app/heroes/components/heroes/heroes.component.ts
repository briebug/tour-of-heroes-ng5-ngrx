import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../../hero';

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

  constructor(private router: Router) {
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
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroDeletedEvent.emit(hero);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHeroId]);
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
}
