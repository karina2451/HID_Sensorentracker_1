import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSensorDataComponent } from './table-sensor-data.component';

describe('TableSensorDataComponent', () => {
  let component: TableSensorDataComponent;
  let fixture: ComponentFixture<TableSensorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSensorDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSensorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
