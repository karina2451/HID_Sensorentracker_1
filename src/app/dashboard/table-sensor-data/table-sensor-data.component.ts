import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SensorData } from 'src/app/SensorData';

@Component({
  selector: 'app-table-sensor-data',
  templateUrl: './table-sensor-data.component.html',
  styleUrls: ['./table-sensor-data.component.scss']
})
export class TableSensorDataComponent implements OnInit {

  constructor(public storeService: StoreService, private backendService: BackendService) { }

  displayedColumns: string[] = ['name', 'date', 'temperature', 'humidity', 'location'];
  dataSource!: MatTableDataSource<SensorData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  async ngOnInit() {
    await this.backendService.getSensors();
    await this.backendService.getSensorData();

    this.dataSource = new MatTableDataSource(this.storeService.sensorData);
    this.dataSource.paginator = this.paginator;
  }
}