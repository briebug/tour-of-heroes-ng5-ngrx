import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() searchTerms = new EventEmitter<string>();
  @Output() selectedSearchItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  search(term: string) {
    this.searchTerms.emit(term);
  }

  gotoDetail(hero: Hero) {
    this.selectedSearchItem.emit(hero.id);
  }
}
