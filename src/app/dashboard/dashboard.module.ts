import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceivedComponent } from './received/received.component';
import { ReturnsComponent } from './returns/returns.component';
import { StocksComponent } from './stocks/stocks.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ShoppingComponent,
    ReceivedComponent,
    ReturnsComponent,
    StocksComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
