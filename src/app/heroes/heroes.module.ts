import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditComponent } from './containers/edit/edit.component';
import { HeroComponent } from './containers/hero/hero.component';
import { IndexComponent } from './containers/index/index.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IndexComponent,
    HeroComponent,
    EditComponent,
    HeroesComponent,
  ]
})
export class HeroesModule { }
