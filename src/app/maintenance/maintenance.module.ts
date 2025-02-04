import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ProvidersComponent } from './providers/providers.component';
import { SettingsComponent } from './settings/settings.component';
import { ProviderModalComponent } from './provider-modal/provider-modal.component';
import { FormsModule } from '@angular/forms';
import { ProductModalComponent } from './product-modal/product-modal.component';


@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    ProvidersComponent,
    SettingsComponent,
    ProviderModalComponent,
    ProductModalComponent
  ],
  imports: [
    CommonModule,

    MaintenanceRoutingModule,
    FormsModule
  ]
})
export class MaintenanceModule { }
