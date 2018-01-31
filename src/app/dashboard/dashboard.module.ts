import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopHeroesListComponent } from '../heroes/components/top-heroes-list/top-heroes-list.component';
import { IndexComponent } from './containers/index/index.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IndexComponent,
    TopHeroesListComponent
  ]
})
export class DashboardModule { }
