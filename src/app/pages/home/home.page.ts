import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}
  @ViewChild('graficoLinha') graficoLinha: ElementRef;

  estadoCategoria: string;
  valorDinamico: number;
  dadosGrafico: number[];
  grafico: any;

  ngOnInit() {
    this.estadoCategoria = 'renda';
    this.valorDinamico = 12000;
    console.log('Depois: ', this.estadoCategoria);

  }

  ionViewDidEnter() {
    this.criarGrafico();
  }

  mudarCategoriaHome(ev: any) {
    console.log('Nova categoria: ', ev.detail.value);
    this.trocarDadosGrafico();
    this.criarGrafico();

  }

  criarGrafico() {
    this.grafico = new Chart(this.graficoLinha.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abril'],
        datasets: [
          {
            label: this.estadoCategoria.toUpperCase(),
            data: this.dadosGrafico,
            borderColor: '#00AEFF',
            borderWidth: 3,
            fill: false,
            pointRadius: 2,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: 'black',
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  trocarDadosGrafico() {
    switch (this.estadoCategoria) {
      case 'renda':
        this.dadosGrafico = [1500, 2500, 4800, 9000];
        break;
      case 'gasto':
        this.dadosGrafico = [800, 4500, 200, 500];
        break;
      default:
        this.dadosGrafico = [0];
        break;
    }

  }
}
