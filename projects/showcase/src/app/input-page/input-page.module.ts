import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPageComponent } from './input-page.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InputPageModule { }
