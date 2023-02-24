import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-review-part-comments',
  templateUrl: './review-part-comments.component.html',
  styleUrls: ['./review-part-comments.component.css']
})
export class ReviewPartCommentsComponent implements OnInit {
  @Input() product?: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
