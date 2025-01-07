import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers/providers.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'providers', component: ProvidersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
