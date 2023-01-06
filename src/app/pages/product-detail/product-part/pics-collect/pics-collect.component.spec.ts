import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsCollectComponent } from './pics-collect.component';

describe('PicsCollectComponent', () => {
  let component: PicsCollectComponent;
  let fixture: ComponentFixture<PicsCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsCollectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
