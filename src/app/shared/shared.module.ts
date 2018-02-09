import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidekickListComponent } from './sidekick-list/sidekick-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidekickListComponent
  ],
  exports: [
    SidekickListComponent
  ]
})
export class SharedModule { }
