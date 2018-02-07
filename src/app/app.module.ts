import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
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
    DashboardModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent
  ],
  providers: [HeroService, SidekickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
