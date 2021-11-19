import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTokenComponent } from './my-token.component';

describe('MyTokenComponent', () => {
  let component: MyTokenComponent;
  let fixture: ComponentFixture<MyTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
