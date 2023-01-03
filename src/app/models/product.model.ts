import { ICategory, IImage, IReview, IMaterial } from '.';

export interface IProduct {
  name: string;
  id: string;
  price: number;
  images: Array<IImage>;
  color: string;
  review: Array<IReview>;
  description: string;
  categories: Array<ICategory>;
  material: Array<IMaterial>;
}
