import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMailingSettingComponent } from './admin-mailing-setting.component';

describe('AdminMailingSettingComponent', () => {
  let component: AdminMailingSettingComponent;
  let fixture: ComponentFixture<AdminMailingSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMailingSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMailingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
