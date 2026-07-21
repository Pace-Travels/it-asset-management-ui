import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login';
import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './core/guards/auth-guard';


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

  // Layout Routes
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout')
        .then(c => c.MainLayout),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard', loadChildren: () => import('./pages/shared/dashbaord/dasboard.routes').then((m) => m.DASHBOARD_ROUTE),
      },
      {
        path: 'asset-info', loadChildren: () => import('./pages/master/asset-info/assetInfo.routes').then((m) => m.ASSETINFO_ROUTE),
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];