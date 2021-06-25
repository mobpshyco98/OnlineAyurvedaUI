import { TestBed } from '@angular/core/testing';

import { MedSpecServiceService } from './med-spec-service.service';

describe('MedSpecServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedSpecServiceService = TestBed.get(MedSpecServiceService);
    expect(service).toBeTruthy();
  });
});
