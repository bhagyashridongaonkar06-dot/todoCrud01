import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCrud01Component } from './product-crud01.component';

describe('ProductCrud01Component', () => {
  let component: ProductCrud01Component;
  let fixture: ComponentFixture<ProductCrud01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCrud01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCrud01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
