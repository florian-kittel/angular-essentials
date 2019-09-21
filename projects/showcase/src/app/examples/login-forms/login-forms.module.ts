import { NgModule } from '@angular/core';
import { LoginFormsComponent } from './login-forms.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginFormsComponent
  }
];


@NgModule({
  declarations: [LoginFormsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class LoginFormsModule { }
