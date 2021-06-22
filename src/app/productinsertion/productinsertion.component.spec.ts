import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinsertionComponent } from './productinsertion.component';

describe('ProductinsertionComponent', () => {
  let component: ProductinsertionComponent;
  let fixture: ComponentFixture<ProductinsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductinsertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductinsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
