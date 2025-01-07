import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ProvidersComponent } from './providers/providers.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    ProvidersComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
