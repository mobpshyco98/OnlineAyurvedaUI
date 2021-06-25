import { TestBed } from '@angular/core/testing';

import { StorageserviceService } from './storageservice.service';

describe('StorageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageserviceService = TestBed.get(StorageserviceService);
    expect(service).toBeTruthy();
  });
});
