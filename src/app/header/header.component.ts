import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Sensorentracker';
  public imagePath:string = "./../assets/images/sensor_icon.png"

  constructor() { }

  ngOnInit(): void {
  }

}
