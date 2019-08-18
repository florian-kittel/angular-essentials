import { TestBed } from '@angular/core/testing';

import { EssentialsService } from './essentials.service';

describe('EssentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EssentialsService = TestBed.get(EssentialsService);
    expect(service).toBeTruthy();
  });
});
