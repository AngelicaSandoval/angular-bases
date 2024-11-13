import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CounterModule } from "../counter/counter.module";


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CounterModule
  ]

})

export class DbzModule { }
