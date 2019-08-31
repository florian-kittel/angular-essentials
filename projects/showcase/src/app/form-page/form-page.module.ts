import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FormPageComponent
  }
];


@NgModule({
  declarations: [FormPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class FormPageModule { }
