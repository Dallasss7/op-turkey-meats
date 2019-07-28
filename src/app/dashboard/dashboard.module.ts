import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule { }
