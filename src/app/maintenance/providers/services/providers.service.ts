
import { Injectable } from '@angular/core';

export interface Provider {
  id: number;
  creationDate: string;
  name: string;
  contactPerson: string;
  phoneContact: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private localStorageKey = 'providers';

  constructor() {}

  // Obtener todos los proveedores
  getProviders(): Provider[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  // Agregar un nuevo proveedor
  addProvider(provider: Provider): void {
    const providers = this.getProviders();
    provider.id = this.generateId(providers); // Generar un ID único
    providers.push(provider);
    localStorage.setItem(this.localStorageKey, JSON.stringify(providers));
  }

  // Actualizar un proveedor existente
  updateProvider(provider: Provider): void {
    const providers = this.getProviders();
    const index = providers.findIndex((p) => p.id === provider.id);
    if (index !== -1) {
      providers[index] = provider;
      localStorage.setItem(this.localStorageKey, JSON.stringify(providers));
    }
  }

  // Eliminar un proveedor
  deleteProvider(id: number): void {
    const providers = this.getProviders().filter((provider) => provider.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(providers));
  }

  // Generar un ID único
  private generateId(providers: Provider[]): number {
    return providers.length > 0 ? Math.max(...providers.map((p) => p.id)) + 1 : 1;
  }
}


/* import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Provider {
  id: number;
  creationDate: string;
  name: string;
  contactPerson: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private providers: Provider[] = [
    { id: 1, creationDate: '2023-07-07 16:30', name: 'INTEC', contactPerson: 'Luis Tito', status: 'Activo' },
  ];

  private providersSubject = new BehaviorSubject<Provider[]>(this.providers);

  getProviders(): Observable<Provider[]> {
    return this.providersSubject.asObservable();
  }

  addProvider(provider: Provider): void {
    this.providers.push({ ...provider, id: this.providers.length + 1 });
    this.providersSubject.next(this.providers);
  }

  updateProvider(updatedProvider: Provider): void {
    const index = this.providers.findIndex((p) => p.id === updatedProvider.id);
    if (index > -1) {
      this.providers[index] = updatedProvider;
      this.providersSubject.next(this.providers);
    }
  }

  deleteProvider(id: number): void {
    this.providers = this.providers.filter((p) => p.id !== id);
    this.providersSubject.next(this.providers);
  }
}
 */
