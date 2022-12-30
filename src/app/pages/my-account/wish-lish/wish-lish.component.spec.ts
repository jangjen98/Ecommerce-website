import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishLishComponent } from './wish-lish.component';

describe('WishLishComponent', () => {
  let component: WishLishComponent;
  let fixture: ComponentFixture<WishLishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishLishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishLishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
