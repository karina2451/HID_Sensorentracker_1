import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SensorData } from 'src/app/SensorData';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table-sensor-data',
  templateUrl: './table-sensor-data.component.html',
  styleUrls: ['./table-sensor-data.component.scss']
})
export class TableSensorDataComponent implements OnInit {

  constructor(public storeService: StoreService, private backendService: BackendService, private _liveAnnouncer: LiveAnnouncer) { }

  displayedColumns: string[] = ['name', 'date', 'temperature', 'humidity', 'location', 'position', 'delete'];
  dataSource!: MatTableDataSource<SensorData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit() {
    await this.backendService.getSensors();
    await this.backendService.getSensorData();

    this.dataSource = new MatTableDataSource(this.storeService.sensorData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  async deleteSensorData(id: number) {
    await this.backendService.deleteSensorData(id);
    this.refreshSensorDataTable();
  }

  async refreshSensorDataTable() {
    await this.backendService.getSensorData;
    const dataArray: SensorData[] = this.storeService.getSensorData;
    this.dataSource = new MatTableDataSource(dataArray)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}