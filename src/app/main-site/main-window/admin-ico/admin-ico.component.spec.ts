import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminICOComponent } from './admin-ico.component';

describe('AdminICOComponent', () => {
  let component: AdminICOComponent;
  let fixture: ComponentFixture<AdminICOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminICOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminICOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
