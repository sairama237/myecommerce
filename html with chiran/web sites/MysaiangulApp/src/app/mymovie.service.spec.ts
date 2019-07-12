import { TestBed } from '@angular/core/testing';

import { MymovieService } from './mymovie.service';

describe('MymovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MymovieService = TestBed.get(MymovieService);
    expect(service).toBeTruthy();
  });
});
