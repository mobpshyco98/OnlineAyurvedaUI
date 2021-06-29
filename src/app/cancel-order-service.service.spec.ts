import { TestBed } from '@angular/core/testing';

import { CancelOrderServiceService } from './cancel-order-service.service';

describe('CancelOrderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancelOrderServiceService = TestBed.get(CancelOrderServiceService);
    expect(service).toBeTruthy();
  });
});
