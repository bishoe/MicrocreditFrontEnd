import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveistallmentsComponent } from './removeistallments.component';

describe('RemoveistallmentsComponent', () => {
  let component: RemoveistallmentsComponent;
  let fixture: ComponentFixture<RemoveistallmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveistallmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveistallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
