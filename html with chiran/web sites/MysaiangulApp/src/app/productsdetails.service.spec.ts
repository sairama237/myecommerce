import { TestBed } from '@angular/core/testing';

import { ProductsdetailsService } from './productsdetails.service';

describe('ProductsdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsdetailsService = TestBed.get(ProductsdetailsService);
    expect(service).toBeTruthy();
  });
});
