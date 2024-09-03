import { Route } from "@angular/router";

export const STUDENTES_ROUTES: Route[] = [

    {
      path: 'ajouter',
      loadComponent: () => import('./students-add/students-add.component').then(m => m.StudentsAddComponent)
    },
    {
      path: 'informations',
      loadComponent: () => import('./students-details/students-details.component').then(m => m.StudentsDetailsComponent)
    },
    {
      path: 'listes',
      loadComponent: () => import('./students-list/students-list.component').then(m => m.StudentsListComponent)
    },
    {
      path: 'modifier',
      loadComponent: () => import('./students-edit/students-edit.component').then(m => m.StudentsEditComponent)
    },
    {
      path: 'grille',
      loadComponent: () => import('./students-grid/students-grid.component').then(m => m.StudentsGridComponent)
    },

    
];