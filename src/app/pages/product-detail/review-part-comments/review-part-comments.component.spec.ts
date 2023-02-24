import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPartCommentsComponent } from './review-part-comments.component';

describe('ReviewPartCommentsComponent', () => {
  let component: ReviewPartCommentsComponent;
  let fixture: ComponentFixture<ReviewPartCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPartCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPartCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
