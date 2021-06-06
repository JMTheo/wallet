import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { LocalStorageService } from '../../service/local-storage-service.service';
import { Lancamento } from '../../interface/lancamento';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private LocalStorageService: LocalStorageService) {}
  @ViewChild('graficoLinha') graficoLinha: ElementRef;

  estadoCategoria: string;
  valorDinamico: number;
  labelValorD: string;
  dadosGrafico: number[];
  corGrafico: string;
  grafico: any;
  storage: any;
  listaLancamentos: Array<Lancamento>;
  legendasGrafico: string[];

  async ngOnInit() {
    this.storage = this.LocalStorageService;
    this.estadoCategoria = 'entrada';
  }

  async ionViewDidEnter() {
    await this.retornaTodosLancamentos();
    this.trocarDadosGrafico();
    this.criarGrafico();
  }

  mudarCategoriaHome(ev: any) {
    this.trocarDadosGrafico();
    this.criarGrafico();
  }

  criarGrafico() {
    this.grafico = new Chart(this.graficoLinha.nativeElement, {
      type: 'line',
      data: {
        labels: this.legendasGrafico,
        datasets: [
          {
            label: this.estadoCategoria.toUpperCase(),
            data: this.dadosGrafico,
            borderColor: this.corGrafico,
            borderWidth: 3,
            fill: false,
            pointRadius: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
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

  //TODO: Ajustar a label dos valores
  trocarDadosGrafico() {
    let entradas = {
      valores: [],
      data: [],
      total: 0
    };
    let saidas = {
      valores: [],
      data: [],
      total: 0
    };
    if (this.listaLancamentos) {
      this.listaLancamentos.forEach((el) => {
        if (el.tipoTransacao == 'entrada') {
          entradas.valores.push(el.valor);
          entradas.data.push(el.diaCompra);
          entradas.total += el.valor;
        } else {
          saidas.data.push(el.diaCompra);
          saidas.valores.push(el.valor);
          saidas.total += el.valor;
        }
      });
    }

    switch (this.estadoCategoria) {
      case 'entrada':
        this.dadosGrafico = entradas.valores;
        this.legendasGrafico = entradas.data;
        this.corGrafico = '#42d77d';
        this.labelValorD = 'Ganhos totais';
        this.valorDinamico = entradas.total;

        break;
      case 'saida':
        this.dadosGrafico = saidas.valores;
        this.legendasGrafico = saidas.data;
        this.corGrafico = '#ed576b';
        this.labelValorD = 'Gastos totais';
        this.valorDinamico = saidas.total;
        break;
      default:
        this.dadosGrafico = [0];
        break;
    }
  }
  async retornaTodosLancamentos() {
    this.listaLancamentos = await this.storage.retornaTodosLancamentos();
  }
}
