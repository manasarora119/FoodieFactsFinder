import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighChartsService {
  chartInstance: any;
  constructor() { 
    Highcharts.setOptions({ lang: { thousandsSep: ',', noData: 'No data is available to represent in chart'} });
  }
  createChart(el:any, cfg:any) {
    this.chartInstance =  Highcharts.chart(el, cfg);
  }
}