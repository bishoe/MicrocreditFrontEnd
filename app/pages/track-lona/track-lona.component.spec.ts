import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLonaComponent } from './track-lona.component';

describe('TrackLonaComponent', () => {
  let component: TrackLonaComponent;
  let fixture: ComponentFixture<TrackLonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackLonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
