import { TestBed } from '@angular/core/testing';

import { PartdetailService } from './partdetail.service';

describe('PartdetailService', () => {
  let service: PartdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
