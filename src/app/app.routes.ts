import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    {
        path: '', 
        loadChildren: () => import('./features/features.routes').then(mod => mod.FEATURES_ROUTES)
    },
];


