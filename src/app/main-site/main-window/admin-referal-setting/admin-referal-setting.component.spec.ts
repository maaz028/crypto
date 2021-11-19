import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReferalSettingComponent } from './admin-referal-setting.component';

describe('AdminReferalSettingComponent', () => {
  let component: AdminReferalSettingComponent;
  let fixture: ComponentFixture<AdminReferalSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReferalSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReferalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
