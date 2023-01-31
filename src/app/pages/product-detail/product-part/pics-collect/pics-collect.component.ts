import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IProduct } from 'src/app/models';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import { ProductService } from 'src/app/services/product.service';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-pics-collect',
  templateUrl: './pics-collect.component.html',
  styleUrls: ['./pics-collect.component.css']
})
export class PicsCollectComponent implements OnInit {
  @Input() product?: IProduct;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
