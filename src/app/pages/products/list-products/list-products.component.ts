import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public products: IProduct[] = [];
  public selectedProduct: IProduct | undefined;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();

    }
  onSelect(product: IProduct){
    this.selectedProduct = product;
  }

}
