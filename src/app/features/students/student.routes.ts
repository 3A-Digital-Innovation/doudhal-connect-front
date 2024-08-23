import { Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

export const studentRoutes: Routes = [
  {
    path: 'students',
    loadComponent: () => import('./students.component').then(m => m.StudentsComponent)
  },
  {
    path: 'details-etudiants',
    loadComponent: () => import('./student-view/student-view.component').then(m => m.StudentViewComponent)
  }
];
