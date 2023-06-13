import { TestBed } from '@angular/core/testing';

import { PaymentOfistallmentsService } from './payment-ofistallments.service';

describe('PaymentOfistallmentsService', () => {
  let service: PaymentOfistallmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentOfistallmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
