import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'input',
    loadChildren: () => import('./input-page/input-page.module').then(mod => mod.InputPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button-page/button-page.module').then(mod => mod.ButtonPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form-page/form-page.module').then(mod => mod.FormPageModule)
  },
  {
    path: 'examples',
    children: [
      {
        path: 'login-forms',
        loadChildren: () => import('./examples/login-forms/login-forms.module').then(mod => mod.LoginFormsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
