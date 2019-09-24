import { TestBed } from '@angular/core/testing';

import { WomensService } from './womens.service';

describe('WomensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WomensService = TestBed.get(WomensService);
    expect(service).toBeTruthy();
  });
});
