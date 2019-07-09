import { TestBed } from '@angular/core/testing';

import { MyserviceempService } from './myserviceemp.service';

describe('MyserviceempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyserviceempService = TestBed.get(MyserviceempService);
    expect(service).toBeTruthy();
  });
});
