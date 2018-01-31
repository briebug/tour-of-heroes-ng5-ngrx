import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './dashboard/containers/index/index.component';

import { HeroDetailComponent } from './hero-detail.component';
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
  { path: 'detail/:id',
    component: HeroDetailComponent
  },
  { path: 'heroes',
    component: HeroesIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
