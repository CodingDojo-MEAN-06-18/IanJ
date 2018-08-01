import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  subscribeProducts() {
    return this.products;
  }
  add(product: Product): void {
    const products = this.showProducts();
    product.id = products.length + 1;
    products.push(product);
    this.products.next(products);
  }

  delete(product: Product): void {
    const products = this.showProducts().filter((item) => item.id !== product.id);
    this.products.next(products);
  }

  updateProduct(product: Product): void {
    const products = this.showProducts();
    products.map(iten => products.find(i => i.id === product.id) || item);
  }

  showProduct(id: number): Product {
    return this.showProducts().find(item => item.id === id);
  }

  private showProducts = () => this.products.getValue();
}
