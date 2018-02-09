import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidekicksComponent } from './containers/sidekicks/sidekicks.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SidekicksComponent
  ]
})
export class SidekicksModule { }
