import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidekicksComponent } from './containers/sidekicks/sidekicks.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: '', component: SidekicksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SidekicksComponent
  ]
})
export class SidekicksModule { }
