import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssentialsModule } from '../../libs/essentials';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    EssentialsModule,
  ]
})
export class SharedModule { }
