import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddNewLonaComponent } from './main-add-new-lona.component';

describe('MainAddNewLonaComponent', () => {
  let component: MainAddNewLonaComponent;
  let fixture: ComponentFixture<MainAddNewLonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddNewLonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddNewLonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
