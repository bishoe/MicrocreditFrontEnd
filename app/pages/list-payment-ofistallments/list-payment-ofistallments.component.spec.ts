import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentOfistallmentsComponent } from './list-payment-ofistallments.component';

describe('ListPaymentOfistallmentsComponent', () => {
  let component: ListPaymentOfistallmentsComponent;
  let fixture: ComponentFixture<ListPaymentOfistallmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentOfistallmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaymentOfistallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
