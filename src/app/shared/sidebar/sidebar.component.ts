import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

interface NavItem {
  icon: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activeLink: string = 'dashboard';

  constructor(public navService: NavigationService) {}

  // Items principales de navegación
  mainNavItems: NavItem[] = [
    { icon: 'bx-grid-alt', name: 'Dashboard', link: 'dashboard' },
    { icon: 'bx-cart', name: 'Compras', link: 'compras' },
    { icon: 'bx-package', name: 'Recibidos', link: 'recibidos' },
    { icon: 'bx-rotate-left', name: 'Devoluciones', link: 'devoluciones' },
    { icon: 'bx-box', name: 'Stocks', link: 'stocks' },
    { icon: 'bx-store', name: 'Ventas', link: 'ventas' }
  ];

  // Items de mantenimiento
  maintenanceNavItems: NavItem[] = [
    { icon: 'bx-group', name: 'Proveedores', link: '/maintenance/providers' },
    { icon: 'bx-package', name: 'Productos', link: '/maintenance/products' },
    { icon: 'bx-user', name: 'Usuarios', link: '/maintenance/users' },
    { icon: 'bx-cog', name: 'Configuración', link: '/maintenance/settings' }
  ];

  // Host listener para detectar clicks fuera del sidebar
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbar = document.querySelector('.l-navbar');
    const toggleButton = document.querySelector('.header_toggle');

    // Verificar si el sidebar está expandido antes de intentar colapsarlo
    if (navbar && !navbar.contains(event.target as Node) &&
        toggleButton && !toggleButton.contains(event.target as Node)) {
      this.navService.collapse();
    }
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    // Colapsar el sidebar en dispositivos móviles al seleccionar una opción
    if (window.innerWidth < 768) {
      this.navService.collapse();
    }
  }
}
