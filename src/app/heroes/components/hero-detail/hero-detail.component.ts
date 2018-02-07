import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../../../core/models/hero';
import { Sidekick } from '../../../core/models/sidekick';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {

  @Input() hero: Hero;
  @Input() sidekicks: Sidekick[];
  @Output() saveHeroEvent = new EventEmitter<Hero>();
  @Output() backClick = new EventEmitter();
  @Output() error = new EventEmitter<any>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hero) {
      this.populateForm();
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  populateForm() {
    this.form.patchValue({
      name: this.hero.name,
    }, {
      emitEvent: false,
    });
  }

  save(): void {
    if (!this.form.valid) {
      this.error.emit('Invalid Hero Name');
      return;
    }
    const editHero = new Hero();
    editHero.id = this.hero.id;
    editHero.name = this.form.get('name').value;
    this.saveHeroEvent.emit(editHero);
  }

  goBack(): void {
    this.backClick.emit();
  }
}
