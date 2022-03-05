import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { MainComponent } from './main.component';
import { SecondComponent } from './second/second.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
