import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './components/donate.component';

const introRoutes: Routes = [
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(introRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntroRoutingModule { }
