import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css'],
})
export class ProductContentComponent implements OnInit {
  @Input() product?: IProduct;
  public avg_rate?: number;
  public faStar_regular = faStar;

  constructor() {}

  ngOnInit(): void {
    this.avg_rate = this.product?.review.reduce(
      (total_rate, amount_rate, index, array) => {
        total_rate += amount_rate.star;
        if (index === array.length - 1) {
          return total_rate / array.length;
        } else {
          return total_rate;
        }
      },
      0
    );
  }
}
