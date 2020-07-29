import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuard } from './cancel-confirmation.service';

describe('CanDeactivateGuard', () => {
  let service: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
