import { TestBed } from '@angular/core/testing';

import { FullpartlistService } from './fullpartlist.service';

describe('FullpartlistService', () => {
  let service: FullpartlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullpartlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
