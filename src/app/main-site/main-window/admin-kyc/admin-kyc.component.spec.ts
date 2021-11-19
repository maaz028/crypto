import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKYCComponent } from './admin-kyc.component';

describe('AdminKYCComponent', () => {
  let component: AdminKYCComponent;
  let fixture: ComponentFixture<AdminKYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKYCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
