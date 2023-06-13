import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOfistallmentsbetweenDateReportComponent } from './payment-ofistallmentsbetween-date-report.component';

describe('PaymentOfistallmentsbetweenDateReportComponent', () => {
  let component: PaymentOfistallmentsbetweenDateReportComponent;
  let fixture: ComponentFixture<PaymentOfistallmentsbetweenDateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOfistallmentsbetweenDateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOfistallmentsbetweenDateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
