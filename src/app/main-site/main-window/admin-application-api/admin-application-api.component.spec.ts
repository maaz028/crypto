import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplicationApiComponent } from './admin-application-api.component';

describe('AdminApplicationApiComponent', () => {
  let component: AdminApplicationApiComponent;
  let fixture: ComponentFixture<AdminApplicationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApplicationApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApplicationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
