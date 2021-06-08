import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { LocalStorageService } from '../../service/local-storage-service.service';
import { Lancamento } from '../../interface/lancamento';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private LocalStorageService: LocalStorageService,
    private fireauth: AngularFireAuth
  ) {}
  @ViewChild('graficoLinha') graficoLinha: ElementRef;

  estadoCategoria: string;
  valorDinamico: number;
  labelValorD: string;
  dadosGrafico: number[];
  corGrafico: string;
  grafico: any;
  storage: any;
  listaLancamentos: Array<Lancamento>;
  listaLancamentosCard: Array<Lancamento>;
  legendasGrafico: string[];
  user;

  async ngOnInit() {
    this.storage = this.LocalStorageService;
    this.estadoCategoria = 'entrada';
  }

  async ionViewDidEnter() {
    this.fireauth.onAuthStateChanged((user) => {
      if (user) this.user = user;
    });
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
      total: 0,
    };
    let saidas = {
      valores: [],
      data: [],
      total: 0,
    };
    if (this.listaLancamentos) {
      this.listaLancamentos.forEach((el) => {
        if (el.criador == this.user.email) {
          if (el.tipoOperacao == 'entrada') {
            entradas.valores.push(el.valor);
            entradas.data.push(new Date(el.diaCompra).toLocaleDateString());
            entradas.total += el.valor;
          } else {
            saidas.data.push(new Date(el.diaCompra).toLocaleDateString());
            saidas.valores.push(el.valor);
            saidas.total += el.valor;
          }
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
    let arr = await this.storage.retornaTodosLancamentos();
    if (arr) {
      this.listaLancamentos = arr;
      this.listaLancamentosCard = arr
        .slice()
        .sort(
          (a: Lancamento, b: Lancamento) =>
            new Date(b.diaCompra).getTime() - new Date(a.diaCompra).getTime()
        );
    }
  }
}
