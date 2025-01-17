import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { AuthService } from '../../auth/services/authServices/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    public navService: NavigationService,
    public authService: AuthService,
    private router: Router
  ) {}

  // Items principales de navegación
  mainNavItems: NavItem[] = [
    { icon: 'bx-grid-alt', name: 'Dashboard', link: '/dashboard' },
    { icon: 'bx-cart', name: 'Compras', link: '/dashboard/shopping' },
    { icon: 'bx-package', name: 'Recibidos', link: '/dashboard/received' },
    { icon: 'bx-rotate-left', name: 'Devoluciones', link: '/dashboard/returns' },
    { icon: 'bx-box', name: 'Stocks', link: '/dashboard/stocks' },
    { icon: 'bx-store', name: 'Ventas', link: '/dashboard/sales' }
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

  // Método para cerrar sesión
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.navService.collapse();
  }
}
