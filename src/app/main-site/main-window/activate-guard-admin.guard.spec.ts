import { TestBed } from '@angular/core/testing';

import { ActivateGuardAdminGuard } from './activate-guard-admin.guard';

describe('ActivateGuardAdminGuard', () => {
  let guard: ActivateGuardAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateGuardAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
