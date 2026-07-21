import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login';


export const routes: Routes = [

  // Default route -> Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login Page
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login')
        .then(c => c.LoginComponent)
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];