import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssentialsModule } from '../../libs/essentials';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EssentialsModule,
  ]
})
export class SharedModule { }
