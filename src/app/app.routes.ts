import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('../app/features/students/student.routes').then(m => m.studentRoutes)
  }
];
