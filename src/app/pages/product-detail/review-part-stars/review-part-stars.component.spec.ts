import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPartStarsComponent } from './review-part-stars.component';

describe('ReviewPartStarsComponent', () => {
  let component: ReviewPartStarsComponent;
  let fixture: ComponentFixture<ReviewPartStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPartStarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPartStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
