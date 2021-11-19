import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWebsiteSettingComponent } from './admin-website-setting.component';

describe('AdminWebsiteSettingComponent', () => {
  let component: AdminWebsiteSettingComponent;
  let fixture: ComponentFixture<AdminWebsiteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWebsiteSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWebsiteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
