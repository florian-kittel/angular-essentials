import { NgModule } from '@angular/core';


import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [
  ],
  imports: [
    ButtonModule,
    InputModule,
    SelectModule,
  ],
  exports: [
    ButtonModule,
    InputModule,
    SelectModule,
  ]
})
export class EssentialsModule { }
