import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLonaComponent } from './update-lona.component';

describe('UpdateLonaComponent', () => {
  let component: UpdateLonaComponent;
  let fixture: ComponentFixture<UpdateLonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
