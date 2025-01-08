import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isMainDashboard = false;

  constructor(private router: Router) {
    // Detectar cuando estamos en la ruta principal del dashboard
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isMainDashboard = event.url === '/dashboard' || event.url === '/dashboard/';
    });
  }
}
