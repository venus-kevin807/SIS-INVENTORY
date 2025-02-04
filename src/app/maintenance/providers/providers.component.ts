
import { Component, OnInit } from '@angular/core';
import { Provider, ProvidersService } from './services/providers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = [];
  selectedProvider: Provider | null = null;

  constructor(private providersService: ProvidersService) {}

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders(): void {
    this.providers = this.providersService.getProviders();
  }

  onAdd(): void {
    // Crear un nuevo proveedor vacío para agregar
    this.selectedProvider = {
      id: 0,
      creationDate: new Date().toISOString(),
      name: '',
      contactPerson: '',
      phoneContact: '',
      status: 'Activo',
    };
  }

  onEdit(provider: Provider): void {
    // Editar un proveedor existente
    this.selectedProvider = { ...provider };
  }

  onDelete(id: number): void {
    this.providersService.deleteProvider(id);
    this.loadProviders();
  }

  onSave(provider: Provider | null): void {
    if (provider) {
      if (provider.id === 0) {
        this.providersService.addProvider(provider); // Agregar proveedor
      } else {
        this.providersService.updateProvider(provider); // Actualizar proveedor
      }
    }
    this.selectedProvider = null; // Cerrar el modal
    this.loadProviders(); // Recargar la lista
  }
}


