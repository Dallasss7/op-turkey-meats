import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }