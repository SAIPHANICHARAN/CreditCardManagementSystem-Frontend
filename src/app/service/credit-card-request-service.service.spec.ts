import { TestBed } from '@angular/core/testing';

import { CreditCardRequestServiceService } from './credit-card-request-service.service';

describe('CreditCardRequestServiceService', () => {
  let service: CreditCardRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
