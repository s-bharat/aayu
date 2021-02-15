import { TestBed } from '@angular/core/testing';

import { PartmasterdataService } from './partmasterdata.service';

describe('PartmasterdataService', () => {
  let service: PartmasterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartmasterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
