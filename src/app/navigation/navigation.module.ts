import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './components/navigation.component';


@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [NavigationComponent],
  providers: [],
})
export class NavigationModule { }
