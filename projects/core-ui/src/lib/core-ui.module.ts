import { NgModule } from '@angular/core';


import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';
import { ErrorMessagesModule } from './error-messages/error-messages.module';

@NgModule({
  declarations: [
  ],
  imports: [
    ButtonModule,
    InputModule,
    SelectModule,
    ErrorMessagesModule,
  ],
  exports: [
    ButtonModule,
    InputModule,
    SelectModule,
    ErrorMessagesModule
  ]
})
export class EssentialsModule { }
