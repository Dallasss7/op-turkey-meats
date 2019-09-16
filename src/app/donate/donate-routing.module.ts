import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './components/donate.component';

const donateRoutes: Routes = [
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(donateRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DonateRoutingModule { }
