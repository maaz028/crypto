import { TestBed } from '@angular/core/testing';

import { ActivateguardGuard } from './activateguard.guard';

describe('ActivateguardGuard', () => {
  let guard: ActivateguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
