import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.product = this.productService.productSelected;
  }

}
