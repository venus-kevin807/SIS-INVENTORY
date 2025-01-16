// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from './shared/guards/role.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';

const routes: Routes = [
  {
      path: 'login',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
      path: '',
      canActivate: [AuthGuard],
      children: [
          {
              path: 'dashboard',
              loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          {
              path: 'maintenance',
              canActivate: [RoleGuard],
              loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
          },
          {
              path: '',
              redirectTo: 'dashboard',
              pathMatch: 'full'
          }
      ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
