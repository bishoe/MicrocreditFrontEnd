import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPaymentOfistallmentsComponent } from './add-new-payment-ofistallments.component';

describe('AddNewPaymentOfistallmentsComponent', () => {
  let component: AddNewPaymentOfistallmentsComponent;
  let fixture: ComponentFixture<AddNewPaymentOfistallmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPaymentOfistallmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPaymentOfistallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
