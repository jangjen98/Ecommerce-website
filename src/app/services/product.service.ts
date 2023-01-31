import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
        { url: '/assets/images/white_cam.png', id: 'first-img-white_cam' },
        { url: '/assets/images/black_watch.png', id: 'sec-img-white_cam' },
      ],
      colors: [
        { color: '#FFFFFF', id: '#FFFFFF' },
        { color: '#000000', id: '#000000' },
      ],
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
      images: [
        { url: '/assets/images/black_watch.png', id: 'first-img-black_watch' },
      ],
      colors: [{ color: '#000000', id: '#000000' }],
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
      images: [
        {
          url: '/assets/images/black_glasses.png',
          id: 'first-img-black_glasses',
        },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFD700', id: '#FFD700' },
      ],
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
      name: 'Black Camera',
      id: 'black_camera',
      price: 125,
      images: [
        { url: '/assets/images/black_cam.png', id: 'first-img-black_camera' },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFD700', id: '#FFD700' },
      ],
      review: [
        {
          name: 'Jane',
          description: 'Fine',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 4,
        },
      ],
      description: 'Looks good',
      categories: [{ name: 'cool' }, { name: 'photography' }],
      material: [{ material: 'camera' }],
    },
    {
      name: 'Xbox Controller',
      id: 'xbox_controller',
      price: 120,
      images: [
        {
          url: '/assets/images/xbox_controller.png',
          id: 'first-img-xbox_controller',
        },
        {
          url: '/assets/images/xbox_controller(2).png',
          id: 'sec-img-xbox_controller',
        },
        {
          url: '/assets/images/xbox_controller(3).png',
          id: 'third-img-xbox_controller',
        },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFFFFF', id: '#FFFFFF' },
        { color: '#19F3BF', id: '#19F3BF' },
      ],
      review: [
        {
          name: 'James',
          description: 'Good',
          date: new Date(2022, 11, 21),
          id: 'james',
          star: 5,
        },
      ],
      description: 'Easy to use',
      categories: [{ name: 'cool' }, { name: 'xbox' }, { name: 'game' }],
      material: [{ material: 'plastic' }],
    },
    {
      name: 'Black Glasses',
      id: 'black_glasses',
      price: 120,
      images: [
        {
          url: '/assets/images/black_glasses.png',
          id: 'first-img-black_glasses',
        },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFD700', id: '#FFD700' },
      ],
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
      images: [
        {
          url: '/assets/images/black_glasses.png',
          id: 'first-img-black_glasses',
        },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFD700', id: '#FFD700' },
      ],
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
      images: [
        {
          url: '/assets/images/black_glasses.png',
          id: 'first-img-black_glasses',
        },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFD700', id: '#FFD700' },
      ],
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
      images: [
        {
          url: '/assets/images/black_glasses.png',
          id: 'first-img-black_glasses',
        },
      ],
      colors: [
        { color: '#000000', id: '#000000' },
        { color: '#FFD700', id: '#FFD700' },
      ],
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
  getProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find((p) => p.id === id);
  }
}
