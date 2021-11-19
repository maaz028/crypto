import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminICOSettingComponent } from './admin-icosetting.component';

describe('AdminICOSettingComponent', () => {
  let component: AdminICOSettingComponent;
  let fixture: ComponentFixture<AdminICOSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminICOSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminICOSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
