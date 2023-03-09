import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeSigningComponent } from './alternative-signing.component';

describe('AlternativeSigningComponent', () => {
  let component: AlternativeSigningComponent;
  let fixture: ComponentFixture<AlternativeSigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeSigningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativeSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
