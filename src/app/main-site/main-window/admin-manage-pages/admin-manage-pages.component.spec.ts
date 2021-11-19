import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePagesComponent } from './admin-manage-pages.component';

describe('AdminManagePagesComponent', () => {
  let component: AdminManagePagesComponent;
  let fixture: ComponentFixture<AdminManagePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManagePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
