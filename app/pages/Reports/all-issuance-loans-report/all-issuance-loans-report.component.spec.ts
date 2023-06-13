import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIssuanceLoansReportComponent } from './all-issuance-loans-report.component';

describe('AllIssuanceLoansReportComponent', () => {
  let component: AllIssuanceLoansReportComponent;
  let fixture: ComponentFixture<AllIssuanceLoansReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIssuanceLoansReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIssuanceLoansReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
