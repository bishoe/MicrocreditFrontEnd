import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterestRateComponent } from './update-interest-rate.component';

describe('UpdateInterestRateComponent', () => {
  let component: UpdateInterestRateComponent;
  let fixture: ComponentFixture<UpdateInterestRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInterestRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInterestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
