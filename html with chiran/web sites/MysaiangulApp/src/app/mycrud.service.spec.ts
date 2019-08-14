import { TestBed } from '@angular/core/testing';

import { MycrudService } from './mycrud.service';

describe('MycrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycrudService = TestBed.get(MycrudService);
    expect(service).toBeTruthy();
  });
});
