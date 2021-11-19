import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdiTokensComponent } from './odi-tokens.component';

describe('OdiTokensComponent', () => {
  let component: OdiTokensComponent;
  let fixture: ComponentFixture<OdiTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdiTokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdiTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
