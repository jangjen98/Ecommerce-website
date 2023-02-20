import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { IProduct } from 'src/app/models';
import SwiperCore, { Navigation} from 'swiper';

SwiperCore.use([Navigation])

@Component({
  selector: 'app-pics-collect',
  templateUrl: './pics-collect.component.html',
  styleUrls: [
    './pics-collect.component.css',
    '../../../../../../node_modules/swiper/swiper-bundle.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PicsCollectComponent implements OnInit {
  @Input() product?: IProduct;
  public big_pic?: string;
  constructor() {}

  ngOnInit(): void {
    this.big_pic = this.product?.images[0].url;
  }
  OnChangeBigPic(){

  }

}
