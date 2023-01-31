import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-part',
  templateUrl: './product-part.component.html',
  styleUrls: ['./product-part.component.css']
})
export class ProductPartComponent implements OnInit {
 public product?: IProduct ;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
    console.log(this.product);
  }


}
