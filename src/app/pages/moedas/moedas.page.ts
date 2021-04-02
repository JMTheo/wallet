import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartDataSets, ChartType, ScaleType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage implements OnInit {
  @ViewChild('graficoLinha') graficoLinha: ElementRef;

  ngOnInit() {
  }
  grafico: any;
  legenda: any;
  dadosAPI: any;
  public tipoGrafico: ChartType = 'line';

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  ionViewDidLeave() {
    this.criarGrafico();
  }

  criarGrafico() {
    this.grafico = new Chart(this.graficoLinha.nativeElement, {
      type: this.tipoGrafico,
      data: {
        labels: this.legenda,
        datasets: [{
          label: 'Bitcoin',
          data: this.dadosAPI,
          borderColor: '#00AEFF',
          borderWidth: 3,
          fill: false,
          pointRadius: 2
        }]
      },
      options: {
        legend: {
          display: false,
          labels: {
            fontColor: 'black',
            fontFamily: 'Rubik'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'black',
              fontFamily: 'Rubik'
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'black',
              fontFamily: 'Rubik'
            }
          }]
        }
      }
    });
  }
  loadData() {
    const request: string = `http://api.marketstack.com/v1/eod?access_key=b39be2892ed706cbb1eaaf54a53b2926&symbols=AAPL&date_from=2021-03-08&date_to=2021-03-25`;

    this.httpClient.get(request).subscribe(res => {
      const data: any = (res as any).data;
      this.legenda = [];
      this.dadosAPI = [];

      for (let i = 0; i < data.length; i++) {
        const date: Date = new Date(data[i].date);

        this.legenda.push(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
        this.dadosAPI.push(data[i].close);
      }
      this.legenda = this.legenda.reverse();
      this.dadosAPI = this.dadosAPI.reverse();
      this.grafico = this.criarGrafico();

    });
    
  }
}