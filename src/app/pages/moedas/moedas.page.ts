import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartType, ScaleType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage {
  public chartData: ChartDataSets[] = [{ data: [], label: 'Moeda', lineTension: 0.15 }];
  public chartType: ChartType = 'line';
  public chartLabels: Label[];
  public chartColors: Color[] = [{ backgroundColor: '#ADD8E6', borderColor: '#000000', borderWidth: 1 }];
  public chartLegend: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    const request: string = `http://api.marketstack.com/v1/eod?access_key=b39be2892ed706cbb1eaaf54a53b2926&symbols=AAPL&date_from=2021-02-15&date_to=2021-03-25`;

    this.httpClient.get(request).subscribe(res => {
      const data: any = (res as any).data;

      this.chartLabels = [];
      this.chartData[0].data = [];

      for (let i = 0; i < data.length; i++) {
        const date: Date = new Date(data[i].date);

        this.chartLabels.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
        this.chartData[0].data.push(data[i].close);
      }
    });
  }
}

