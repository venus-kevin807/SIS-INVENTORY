import { Component } from '@angular/core';

interface DashboardItem {
  title: string;
  count: number;
  route: string;
  icon: string; // Clase del ícono
  bgColor: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardItems: DashboardItem[] = [
    { title: 'Órdenes de Compra', count: 3, route: '/ordenes-compra',icon: 'bx-cart', bgColor: '#007bff' },
    { title: 'Compras Recibidas', count: 2, route: '/received', icon: 'bx-package', bgColor: '#17a2b8' },
    { title: 'Devoluciones', count: 1, route: '/returns', icon: 'bx-rotate-left', bgColor: '#ffc107' },
    { title: 'Ventas', count: 1, route: '/sales', icon: 'bx-money', bgColor: '#343a40' },
    { title: 'Proveedores', count: 1, route: '/providers', icon: 'bx-group', bgColor: '#fd7e14' }
  ];

  navigateTo(route: string) {
    // Aquí navega a la ruta correspondiente
    console.log(`Navegando a ${route}`);
  }
}
