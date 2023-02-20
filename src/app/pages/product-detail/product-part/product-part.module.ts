import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPartRoutingModule } from './product-part-routing.module';

import { SwiperComponent } from 'swiper/angular';

// import styles bundle
import 'swiper/css/bundle';

// import Swiper core and required modules
import SwiperCore, { Navigation, Keyboard, Pagination, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Keyboard, Pagination, Virtual]);

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductPartRoutingModule],
})
export class ProductPartModule {}
