import { CounterModule } from './counter/counter.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HeroesModule } from './heroes/heroes.modulo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
