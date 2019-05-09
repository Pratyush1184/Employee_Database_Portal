import { TestBed, inject } from '@angular/core/testing';

import { Serve1Service } from './serve1.service';

describe('Serve1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Serve1Service]
    });
  });

  it('should be created', inject([Serve1Service], (service: Serve1Service) => {
    expect(service).toBeTruthy();
  }));
});
