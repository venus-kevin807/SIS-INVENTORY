import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceivedComponent } from './received/received.component';
import { ReturnsComponent } from './returns/returns.component';
import { StocksComponent } from './stocks/stocks.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'shopping',
        component: ShoppingComponent
      },
      {
        path: 'received',
        component: ReceivedComponent
      },
      {
        path: 'returns',
        component: ReturnsComponent
      },
      {
        path: 'stocks',
        component: StocksComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
