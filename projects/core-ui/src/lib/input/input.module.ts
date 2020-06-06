import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { ErrorMessagesModule } from '../error-messages/error-messages.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ErrorMessagesModule,
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
