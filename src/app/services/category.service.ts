import { EventEmitter, Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categoriesChanged = new EventEmitter<Category[]>();
  public categoryAdded = new EventEmitter<Category>();
  public categories: Category[] = [
    new Category('brands', 'Marck Script', '80px', 400),
    new Category('Electronics', 'JetBrains Mono', '90px', 800),
    new Category('merchandising', 'Lucida Console', '80px', 400),
    new Category('kids', 'Mali', '102px', 400),
  ];
  constructor() {}
  getCategories() {
    return this.categories.slice();
  }
  addCategories(category: Category) {
    this.categories.push(category);
    this.categoriesChanged.emit(this.categories.slice());
  }
  changeCategories(categories: Category[]) {
    this.categories.push(...categories);
    this.categoriesChanged.emit(this.categories.slice());
  }
}
