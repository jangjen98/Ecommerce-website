import { EventEmitter, Injectable } from '@angular/core';
import { ICategoryAppearance, ICategory } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categoriesChanged = new EventEmitter<ICategoryAppearance[]>();
  public categoryAdded = new EventEmitter<ICategoryAppearance>();

  public categories: ICategoryAppearance[] = [
    {
      name: 'brands',
      textFont: 'Marck Script',
      textSize: '80px',
      textWeight: 400,
    },
    {
      name: 'Electronics',
      textFont: 'JetBrains Mono',
      textSize: '90px',
      textWeight: 800,
    },
    {
      name: 'merchandising',
      textFont: 'Lucida Console',
      textSize: '80px',
      textWeight: 400,
    },
    { name: 'kids', textFont: 'Mali', textSize: '102px', textWeight: 400 },
  ];
  constructor() {}
  getCategories() {
    return this.categories.slice();
  }
  addCategories(category: ICategoryAppearance) {
    this.categories.push(category);
    this.categoriesChanged.emit(this.categories.slice());
  }
  changeCategories(categories: ICategoryAppearance[]) {
    this.categories.push(...categories);
    this.categoriesChanged.emit(this.categories.slice());
  }
}
