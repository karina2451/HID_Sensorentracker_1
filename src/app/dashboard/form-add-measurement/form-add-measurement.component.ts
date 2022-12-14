import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import { TableSensorDataComponent } from '../table-sensor-data/table-sensor-data.component';

@Component({
  selector: 'app-form-add-measurement',
  templateUrl: './form-add-measurement.component.html',
  styleUrls: ['./form-add-measurement.component.scss']
})
export class FormAddMeasurementComponent implements OnInit {

  constructor(public storeService: StoreService, private formBuilder: UntypedFormBuilder, public backendService: BackendService) { }

  public newMeasurementForm: any;
  public showNewMeasurementForm: boolean = false;

  ngOnInit(): void {
    this.newMeasurementForm = this.formBuilder.group({
      sensorId: [null, [Validators.required]],
      temperature: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.min(-50),
        Validators.max(60)
      ]],
      humidity: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.min(0),
        Validators.max(100)
      ]],
      date: [null, [Validators.required]]
    })
  }

  async onSubmit() {
    if (this.newMeasurementForm?.valid) {
      await this.backendService.addSensorData(this.newMeasurementForm.value);
      this.newMeasurementForm.reset();
      this.showNewMeasurementForm = false;
    }
    window.location.reload();
  }

  toggleNewMeasurementForm() {
    this.showNewMeasurementForm = !this.showNewMeasurementForm;
  }

  checkFormValidity(): boolean {
    return !this.newMeasurementForm.valid;
  }

}

