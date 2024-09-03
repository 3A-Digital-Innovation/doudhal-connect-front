import { Routes } from '@angular/router';

export const FEATURES_ROUTES: Routes = [
  {
    path: 'etudiants', 
    loadChildren: () => import('./students/students.routes').then(mod => mod.STUDENTES_ROUTES)
  },
/*
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'connexion'
  }, 

  */
];