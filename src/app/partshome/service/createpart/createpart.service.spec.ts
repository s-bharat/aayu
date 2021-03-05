import { TestBed } from '@angular/core/testing';

import { CreatepartService } from './createpart.service';

describe('CreatepartService', () => {
  let service: CreatepartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatepartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
