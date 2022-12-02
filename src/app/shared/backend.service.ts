import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Sensor } from '../Sensor';
import { StoreService } from './store.service';
import { SensorData } from '../SensorData';
import { SensorDataResponse } from '../SensorDataResponse';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private storeService: StoreService, private http: HttpClient) { }

  sensors: Sensor[] = [];

  public async getSensors() {
    this.sensors = await firstValueFrom(this.http.get<Sensor[]>('http://localhost:5000/sensors'));
    this.storeService.sensors = this.sensors;
  }

  public async getSensorData() {
    const sensorDataResponse = await firstValueFrom(this.http.get<SensorDataResponse[]>(`http://localhost:5000/sensorsData`));
    const sensorData: SensorData[] = sensorDataResponse.map(data => {
      const sensor: Sensor = this.sensors.filter(sensor => sensor.id == data.sensorId)[0];
      return { ...data, sensor }
    })
    this.storeService.sensorData = sensorData;
  }

  public async addSensorData(sensorData: SensorData[]) {
    await firstValueFrom(this.http.post('http://localhost:5000/sensorsData', sensorData));
    await this.getSensorData();
  }

  public async deleteSensorData(sensorId: number) {
    await firstValueFrom(this.http.delete(`http://localhost:5000/sensorsData/${sensorId}`));
    await this.getSensorData();
  }
}
