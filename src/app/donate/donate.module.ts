import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DonateComponent } from "./components/donate.component";
import { LocationService } from "./location.service";
import { HttpClientModule } from "@angular/common/http";
import { DonateRoutingModule } from "./donate-routing.module";

@NgModule({
  declarations: [DonateComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DonateRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [DonateComponent],
  providers: [LocationService]
})
export class DonateModule {}
