import { TestBed } from '@angular/core/testing';

import { LoanapproveService } from './loanapprove.service';

describe('LoanapproveService', () => {
  let service: LoanapproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanapproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
