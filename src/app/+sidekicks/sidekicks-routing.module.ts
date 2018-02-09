import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidekicksComponent } from './containers/sidekicks/sidekicks.component';

const routes: Routes = [
  {
    path: '',
    component: SidekicksComponent
  },
  // {
  //   path: ':id',
  //   component: HeroComponent
  // },
  // {
  //   path: ':id/edit',
  //   component: EditComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
