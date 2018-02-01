import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../../core/models/hero';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'my-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() searchTerms = new EventEmitter<string>();
  @Output() selectedSearchItem = new EventEmitter<number>();

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      term: ''
    });
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => this.searchTerms.emit(value.term));
  }

  goTodetail(hero: Hero) {
    this.selectedSearchItem.emit(hero.id);
  }
}
