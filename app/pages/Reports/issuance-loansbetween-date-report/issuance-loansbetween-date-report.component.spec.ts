import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuanceLoansbetweenDateReportComponent } from './issuance-loansbetween-date-report.component';

describe('IssuanceLoansbetweenDateReportComponent', () => {
  let component: IssuanceLoansbetweenDateReportComponent;
  let fixture: ComponentFixture<IssuanceLoansbetweenDateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuanceLoansbetweenDateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceLoansbetweenDateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
