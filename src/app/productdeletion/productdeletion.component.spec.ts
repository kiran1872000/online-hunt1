import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdeletionComponent } from './productdeletion.component';

describe('ProductdeletionComponent', () => {
  let component: ProductdeletionComponent;
  let fixture: ComponentFixture<ProductdeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
