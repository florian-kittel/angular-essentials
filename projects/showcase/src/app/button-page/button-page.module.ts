import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPageComponent } from './button-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ButtonPageComponent
  }
];

@NgModule({
  declarations: [ButtonPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ButtonPageModule { }
