import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpereducComponent } from './expereduc.component';

describe('ExpereducComponent', () => {
  let component: ExpereducComponent;
  let fixture: ComponentFixture<ExpereducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpereducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpereducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
