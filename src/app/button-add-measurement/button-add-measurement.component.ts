import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-measurement',
  templateUrl: './button-add-measurement.component.html',
  styleUrls: ['./button-add-measurement.component.scss']
})
export class ButtonAddMeasurementComponent implements OnInit {

  @Input() text!: string;
  @Input() color!: string;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClicked.emit();
  }

}
