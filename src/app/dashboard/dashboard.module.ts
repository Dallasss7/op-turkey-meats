import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent,
  ],
  imports: [
    BrowserAnimationsModule,
	BrowserModule,
	MatCardModule
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule { }
