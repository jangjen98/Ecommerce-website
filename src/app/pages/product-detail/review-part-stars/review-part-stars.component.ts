import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-review-part-stars',
  templateUrl: './review-part-stars.component.html',
  styleUrls: ['./review-part-stars.component.css']
})
export class ReviewPartStarsComponent implements OnInit {
  @Input() product?: IProduct;
  public numberOfReviews?: number;
  public listStars=[1,2,3,4,5];
  public faStar_solid = faStar;

  constructor() { }

  ngOnInit(): void {
    this.numberOfReviews = this.product?.review.length;
  }

}
