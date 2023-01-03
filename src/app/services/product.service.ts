import { Injectable } from '@angular/core';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  public products: IProduct[] = [
    {
      name: 'White Camera',
      id: 'white_cam',
      price: 105,
      images: [{ url: '/assets/images/white_cam.png' }],
      color: 'white',
      review: [
        {
          name: 'Anna',
          description: 'Good',
          date: new Date(2022, 10, 19),
          id: 'anna',
          star: 5,
        },
      ],
      description: 'Beautiful, delicate and easy to bring everywhere',
      categories: [{ name: 'delicate' }, { name: 'photograph' }],
      material: [{ material: 'camera' }],
    },
    {
      name: 'White Camera',
      id: 'white_cam',
      price: 105,
      images: [{ url: '/assets/images/white_cam.png' }],
      color: 'white',
      review: [
        {
          name: 'Anna',
          description: 'Good',
          date: new Date(2022, 10, 19),
          id: 'anna',
          star: 5,
        },
      ],
      description: 'Beautiful, delicate and easy to bring everywhere',
      categories: [{ name: 'delicate' }, { name: 'photograph' }],
      material: [{ material: 'camera' }],
    },
    {
      name: 'White Camera',
      id: 'white_cam',
      price: 105,
      images: [{ url: '/assets/images/white_cam.png' }],
      color: 'white',
      review: [
        {
          name: 'Anna',
          description: 'Good',
          date: new Date(2022, 10, 19),
          id: 'anna',
          star: 5,
        },
      ],
      description: 'Beautiful, delicate and easy to bring everywhere',
      categories: [{ name: 'delicate' }, { name: 'photograph' }],
      material: [{ material: 'camera' }],
    },
  ];

  constructor() {}
  getProduct(){
    return this.products;
  }
}
