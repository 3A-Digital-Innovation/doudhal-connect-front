import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const FEATURES_ROUTES: Route[] = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
      },
];