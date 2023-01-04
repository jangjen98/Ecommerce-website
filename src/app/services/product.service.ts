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
      images: [
        { url: '/assets/images/white_cam.png', id:'first-img-white_cam' },
        { url: '/assets/images/black_watch.png', id:'sec-img-white_cam' }

      ],
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
      name: 'Black Watch',
      id: 'black_watch',
      price: 110,
      images: [{ url: '/assets/images/black_watch.png',id:'first-img-black_watch' }],
      color: 'black',
      review: [
        {
          name: 'Austin',
          description: 'Ok',
          date: new Date(2022, 1, 19),
          id: 'austin',
          star: 5,
        },
      ],
      description: 'Nice watch, friendly to use',
      categories: [{ name: 'jewelry' }, { name: 'modern' }],
      material: [{ material: 'watch' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [{ url: '/assets/images/black_glasses.png', id:'first-img-black_glasses' }],
      color: 'black',
      review: [
        {
          name: 'James',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good but easy to broken',
      categories: [{ name: 'cool' }, { name: 'sunny' }],
      material: [{ material: 'glasses' }],
    },
  ];

  constructor() {}
  getProduct() {
    return this.products;
  }
}
