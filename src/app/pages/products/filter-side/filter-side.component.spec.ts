import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSideComponent } from './filter-side.component';

describe('FilterSideComponent', () => {
  let component: FilterSideComponent;
  let fixture: ComponentFixture<FilterSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
