import { TestBed } from '@angular/core/testing';

import { AssImgToDestService } from './ass-img-to-dest.service';

describe('AssImgToDestService', () => {
  let service: AssImgToDestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssImgToDestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
