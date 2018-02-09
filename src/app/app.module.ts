import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SidekicksModule } from './+sidekicks/sidekicks.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroService } from './core/services/hero.service';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { SidekickService } from './core/services/sidekick.service.ts.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';
import { StateModule } from './state/state.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DashboardModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule.forRoot(),
    SidekicksModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent
  ],
  providers: [HeroService, SidekickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
