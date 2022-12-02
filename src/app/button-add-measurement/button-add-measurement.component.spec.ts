import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddMeasurementComponent } from './button-add-measurement.component';

describe('ButtonAddMeasurementComponent', () => {
  let component: ButtonAddMeasurementComponent;
  let fixture: ComponentFixture<ButtonAddMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddMeasurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
