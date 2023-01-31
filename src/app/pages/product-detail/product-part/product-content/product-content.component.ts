import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
  @Input() product?: IProduct;

  constructor() { }

  ngOnInit(): void {
  }


}
