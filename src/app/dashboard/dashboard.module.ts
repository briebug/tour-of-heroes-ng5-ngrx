import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroSearchService } from '../core/services/hero-search.service';
import { HeroSearchComponent } from '../heroes/components/hero-search/hero-search.component';
import { TopHeroesListComponent } from '../heroes/components/top-heroes-list/top-heroes-list.component';
import { IndexComponent } from './containers/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    IndexComponent,
    TopHeroesListComponent,
    HeroSearchComponent
  ],
  providers: [HeroSearchService]
})
export class DashboardModule { }
