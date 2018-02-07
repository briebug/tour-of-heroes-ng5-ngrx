import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidekickListComponent } from '../shared/sidekick-list/sidekick-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AddHeroComponent } from './containers/add-hero/add-hero.component';
import { HeroComponent } from './containers/hero/hero.component';
import { IndexComponent } from './containers/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IndexComponent,
    HeroComponent,
    HeroesComponent,
    HeroDetailComponent,
    AddHeroComponent,
    SidekickListComponent
  ]
})
export class HeroesModule { }
