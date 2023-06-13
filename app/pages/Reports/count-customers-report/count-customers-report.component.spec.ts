import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCustomersReportComponent } from './count-customers-report.component';

describe('CountCustomersReportComponent', () => {
  let component: CountCustomersReportComponent;
  let fixture: ComponentFixture<CountCustomersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountCustomersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountCustomersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
