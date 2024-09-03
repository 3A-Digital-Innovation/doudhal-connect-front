import { Routes } from '@angular/router';

export const routes: Routes = [

  {
      path: 'connexion', 
      loadComponent: () => import('./features/login/login.component').then(mod => mod.LoginComponent)
  },

  {
    path: '', 
    loadChildren: () => import('./features/features.routes').then(mod => mod.FEATURES_ROUTES)
  },
/*
  {
    path: '**',
    redirectTo: 'connexion'
  }, 

  */
];
