import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidekicksComponent } from './+sidekicks/containers/sidekicks/sidekicks.component';
import { IndexComponent } from './dashboard/containers/index/index.component';
import { HeroComponent } from './heroes/containers/hero/hero.component';
import { IndexComponent as HeroesIndexComponent } from './heroes/containers/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: IndexComponent
  },
  { path: 'hero/:id',
    component: HeroComponent
  },
  {
    path: 'heroes',
    component: HeroesIndexComponent
  },
  {
    path: 'sidekicks',
    component: SidekicksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
