import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPageComponent } from './input-page.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: InputPageComponent
  }
];

@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class InputPageModule { }
