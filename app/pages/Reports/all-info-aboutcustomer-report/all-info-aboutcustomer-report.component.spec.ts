import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInfoAboutcustomerReportComponent } from './all-info-aboutcustomer-report.component';

describe('AllInfoAboutcustomerReportComponent', () => {
  let component: AllInfoAboutcustomerReportComponent;
  let fixture: ComponentFixture<AllInfoAboutcustomerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInfoAboutcustomerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInfoAboutcustomerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
