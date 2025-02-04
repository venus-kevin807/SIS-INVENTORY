import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  onAdd(): void {
    this.selectedProduct = {
      id: 0,
      name: '',
      price: 0,
      amount: 0,
    };
  }

  onEdit(product: Product): void {
    this.selectedProduct = { ...product };
  }

  onDelete(id: number): void {
    this.productsService.deleteProduct(id).subscribe(
      () => this.loadProducts(),
      (error) => console.error('Error al eliminar producto:', error)
    );
  }

  onSave(product: Product | null): void {
    if (product) {
      if (product.id === 0) {
        this.productsService.addProduct(product).subscribe(
          () => this.loadProducts(),
          (error) => console.error('Error al agregar producto:', error)
        );
      } else {
        this.productsService.updateProduct(product).subscribe(
          () => this.loadProducts(),
          (error) => console.error('Error al actualizar producto:', error)
        );
      }
    }
    this.selectedProduct = null;
  }
}
