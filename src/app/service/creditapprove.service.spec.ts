import { TestBed } from '@angular/core/testing';

import { CreditapproveService } from './creditapprove.service';

describe('CreditapproveService', () => {
  let service: CreditapproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditapproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
