import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusermanagementComponent } from './allusermanagement.component';

describe('AllusermanagementComponent', () => {
  let component: AllusermanagementComponent;
  let fixture: ComponentFixture<AllusermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllusermanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllusermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
