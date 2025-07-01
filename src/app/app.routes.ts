import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:'Introduction',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
},{
  path: '**',
  loadComponent: ()=> import('../components/intro/intro.component').then(m => m.IntroComponent)
}];
