import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DonateModule } from "./donate/donate.module";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about/about.component";

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    AppRoutingModule,
    DonateModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
