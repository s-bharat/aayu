import { TestBed } from '@angular/core/testing';

import { PartnameService } from './partname.service';

describe('PartnameService', () => {
  let service: PartnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
