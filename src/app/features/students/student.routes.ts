import { Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

export const studentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./students.component').then(m => m.StudentsComponent)
  }
];
