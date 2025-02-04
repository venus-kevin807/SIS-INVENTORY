import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Provider } from '../providers/services/providers.service';

@Component({
  selector: 'app-provider-modal',
  templateUrl: './provider-modal.component.html',
  styleUrls: ['./provider-modal.component.css'],
})
export class ProviderModalComponent {
  @Input() provider: Provider = {
    id: 0,
    creationDate: '',
    name: '',
    contactPerson: '',
    phoneContact: '',
    status: 'Activo'
  };
  @Output() save = new EventEmitter<Provider | null>();

  onSave(): void {
    this.save.emit(this.provider);
  }

  onClose(): void {
    this.save.emit(null);
  }
}
