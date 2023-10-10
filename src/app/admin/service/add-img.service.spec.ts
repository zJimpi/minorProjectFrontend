import { TestBed } from '@angular/core/testing';

import { AddImgService } from './add-img.service';

describe('AddImgService', () => {
  let service: AddImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
