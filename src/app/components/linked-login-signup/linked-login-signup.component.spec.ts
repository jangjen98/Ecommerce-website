import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedLoginSignupComponent } from './linked-login-signup.component';

describe('LinkedLoginSignupComponent', () => {
  let component: LinkedLoginSignupComponent;
  let fixture: ComponentFixture<LinkedLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedLoginSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
