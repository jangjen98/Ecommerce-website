import { Injectable } from '@angular/core';
import { products } from '../common/mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getProducts() {
    return products;
  }
  getProduct(id: string) {
    return products.find((p) => p.id === id);
  }
}
