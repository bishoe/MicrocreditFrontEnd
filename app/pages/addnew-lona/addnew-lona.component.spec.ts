import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewLonaComponent } from './addnew-lona.component';

describe('AddnewLonaComponent', () => {
  let component: AddnewLonaComponent;
  let fixture: ComponentFixture<AddnewLonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewLonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewLonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
