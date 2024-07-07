import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('../app/features/students/student.routes').then(m => m.studentRoutes)
  },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    {
        path: 'login', 
        loadChildren: () => import('./features/features.routes').then(mod => mod.FEATURES_ROUTES)
    },
];
