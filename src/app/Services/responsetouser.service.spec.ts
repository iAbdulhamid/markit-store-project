import { TestBed } from '@angular/core/testing';

import { ResponsetouserService } from './responsetouser.service';

describe('ResponsetouserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsetouserService = TestBed.get(ResponsetouserService);
    expect(service).toBeTruthy();
  });
});
