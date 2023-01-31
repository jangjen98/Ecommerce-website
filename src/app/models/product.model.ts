import { ICategory, IImage, IReview, IMaterial, IColor } from '.';

export interface IProduct {
  name: string;
  id: string;
  price: number;
  images: Array<IImage>;
  colors: Array<IColor>;
  review: Array<IReview>;
  description: string;
  categories: Array<ICategory>;
  material: Array<IMaterial>;
}
