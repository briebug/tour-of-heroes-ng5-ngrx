import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './containers/index/index.component';
import { TopHeroesListComponent } from './components/top-heroes-list/top-heroes-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IndexComponent,
    TopHeroesListComponent
  ]
})
export class HeroesModule { }
