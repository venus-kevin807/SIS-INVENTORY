import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products/services/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    amount: 0,
  };
  @Output() save = new EventEmitter<Product | null>();

  onSave(): void {
    this.save.emit(this.product);
  }

  onClose(): void {
    this.save.emit(null);
  }
}
