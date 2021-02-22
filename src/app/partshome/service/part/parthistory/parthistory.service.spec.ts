import { TestBed } from '@angular/core/testing';

import { ParthistoryService } from './parthistory.service';

describe('ParthistoryService', () => {
  let service: ParthistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParthistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
