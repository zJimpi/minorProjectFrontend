import { TestBed } from '@angular/core/testing';

import { AddDestService } from './add-dest.service';

describe('AddDestService', () => {
  let service: AddDestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
