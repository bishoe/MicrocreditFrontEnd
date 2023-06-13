import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDuelmentsbetweenDateComponent } from './report-duelmentsbetween-date.component';

describe('ReportDuelmentsbetweenDateComponent', () => {
  let component: ReportDuelmentsbetweenDateComponent;
  let fixture: ComponentFixture<ReportDuelmentsbetweenDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDuelmentsbetweenDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDuelmentsbetweenDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
