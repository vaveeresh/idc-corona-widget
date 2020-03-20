import { TestBed, inject } from '@angular/core/testing';

import { CoronaApiService } from './corona-api.service';

describe('CoronaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoronaApiService]
    });
  });

  it('should be created', inject([CoronaApiService], (service: CoronaApiService) => {
    expect(service).toBeTruthy();
  }));
});
