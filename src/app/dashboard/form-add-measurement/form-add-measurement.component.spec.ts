import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddMeasurementComponent } from './form-add-measurement.component';

describe('FormAddMeasurementComponent', () => {
  let component: FormAddMeasurementComponent;
  let fixture: ComponentFixture<FormAddMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddMeasurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
