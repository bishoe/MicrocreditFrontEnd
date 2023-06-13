import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemoveistallmentsComponent } from './list-removeistallments.component';

describe('ListRemoveistallmentsComponent', () => {
  let component: ListRemoveistallmentsComponent;
  let fixture: ComponentFixture<ListRemoveistallmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemoveistallmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemoveistallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
