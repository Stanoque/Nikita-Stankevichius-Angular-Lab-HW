import { TestBed } from '@angular/core/testing';

import { CancelConfirmationGuard } from './cancel-confirmation.guard';

describe('CancelConfirmationGuard', () => {
  let guard: CancelConfirmationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CancelConfirmationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
