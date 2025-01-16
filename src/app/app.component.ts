import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-system';

  constructor(private router: Router) {}

  // Determina si la ruta actual es el login
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
