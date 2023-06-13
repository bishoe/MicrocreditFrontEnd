import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterestRateComponent } from './list-interest-rate.component';

describe('ListInterestRateComponent', () => {
  let component: ListInterestRateComponent;
  let fixture: ComponentFixture<ListInterestRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInterestRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInterestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
