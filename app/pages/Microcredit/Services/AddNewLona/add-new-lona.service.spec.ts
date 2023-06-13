import { TestBed } from '@angular/core/testing';

import { AddNewLonaService } from './add-new-lona.service';

describe('AddNewLonaService', () => {
  let service: AddNewLonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewLonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
