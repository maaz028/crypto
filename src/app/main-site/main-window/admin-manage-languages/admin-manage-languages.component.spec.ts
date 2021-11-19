import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageLanguagesComponent } from './admin-manage-languages.component';

describe('AdminManageLanguagesComponent', () => {
  let component: AdminManageLanguagesComponent;
  let fixture: ComponentFixture<AdminManageLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
