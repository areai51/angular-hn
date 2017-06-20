import { TestBed, inject } from '@angular/core/testing';

import { HnServiceService } from './hn-service.service';

describe('HnServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HnServiceService]
    });
  });

  it('should be created', inject([HnServiceService], (service: HnServiceService) => {
    expect(service).toBeTruthy();
  }));
});
