import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartDataSets, ChartType, ScaleType } from 'chart.js';
import { FormControl, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.page.html',
  styleUrls: ['./moedas.page.scss'],
})
export class MoedasPage implements OnInit {
  @ViewChild('graficoLinha') graficoLinha: ElementRef;

  ngOnInit() {}
  grafico: any;
  legenda: any;
  dadosAPI: any;
  moeda: any = {
    origem: new FormControl('USD', Validators.required),
    final: new FormControl('BRL', Validators.required),
    valor_final: 0,
    valor_origem: new FormControl('0.00', Validators.required),
  };
  moedaEscolhida:string;
  listaMoedas = {
    dolar: 1,
    euro: 1,
    libra: 1,
    real: 1,
    iene: 1,
  };

  public tipoGrafico: ChartType = 'line';

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  ionViewDidEnter() {
    this.criarGrafico();
    let inicializador = {
      target: {
        value: 'BRL',
      },
    };
    this.moedaEscolhida = inicializador.target.value;
    this.conversaoMoedas(inicializador);
  }

  criarGrafico() {
    this.grafico = new Chart(this.graficoLinha.nativeElement, {
      type: this.tipoGrafico,
      data: {
        labels: this.legenda,
        datasets: [
          {
            label: 'Bitcoin',
            data: this.dadosAPI,
            borderColor: '#00AEFF',
            borderWidth: 3,
            fill: false,
            pointRadius: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
          labels: {
            fontColor: 'black',
            fontFamily: 'Rubik',
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: 'black',
                fontFamily: 'Rubik',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: 'black',
                fontFamily: 'Rubik',
              },
            },
          ],
        },
      },
    });
  }

  loadData() {
    const request: string = `http://api.marketstack.com/v1/eod?access_key=b39be2892ed706cbb1eaaf54a53b2926&symbols=BTC&date_from=2021-06-01&date_to=2021-06-04`;

    this.httpClient.get(request).subscribe((res) => {
      const data: any = (res as any).data;
      this.legenda = [];
      this.dadosAPI = [];

      for (let i = 0; i < data.length; i++) {
        const date: Date = new Date(data[i].date);

        this.legenda.push(
          `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        );
        this.dadosAPI.push(data[i].close);
      }
      this.legenda = this.legenda.reverse();
      this.dadosAPI = this.dadosAPI.reverse();
      this.grafico = this.criarGrafico();
    });
  }

  converterMoeda() {
    let origem = this.moeda.origem.value;
    let final = this.moeda.final.value;
    axios
      .get(
        'https://api.currconv.com/api/v7/convert?q=' +
          origem +
          '_' +
          final +
          '&compact=ultra&apiKey=a19b93f5fd9b4392b6c32517eb7f9ad4'
      )
      .then((res) => {
        console.log(res.data[origem + '_' + final]);
        let conversao =
          this.moeda.valor_origem.value * res.data[origem + '_' + final];
        this.moeda.valor_final = conversao.toFixed(2);
      })
      .catch((err) => console.log('Erro: ', err));
  }

  conversaoMoedas($event) {
    let stringPesquisa = '';
    let origem = $event.target.value;
    let listaMoedas = ['USD', 'EUR', 'GBP', 'BRL', 'JPY'];
    let index = listaMoedas.indexOf(origem);
    listaMoedas.splice(index, 1);

    //Atualizando label
    this.moedaEscolhida = origem;

    listaMoedas.forEach((el) => {
      stringPesquisa += origem + '_' + el + ',';
    });
    stringPesquisa = stringPesquisa.slice(0, -1);

    axios
      .get(
        'https://api.currconv.com/api/v7/convert?q=' +
          stringPesquisa +
          '&compact=ultra&apiKey=a19b93f5fd9b4392b6c32517eb7f9ad4'
      )
      .then((res) => {
        let moedas = stringPesquisa.split(',');

        this.listaMoedas = {
          dolar: 1,
          euro: 1,
          iene: 1,
          libra: 1,
          real: 1,
        };

        moedas.forEach((el) => {
          let valor = res.data[el];
          valor = valor.toFixed(2);
          console.log(valor);

          if (el.includes('_USD')) this.listaMoedas.dolar = valor;
          else if (el.includes('_EUR')) this.listaMoedas.euro = valor;
          else if (el.includes('_GBP')) this.listaMoedas.libra = valor;
          else if (el.includes('_BRL')) this.listaMoedas.real = valor;
          else this.listaMoedas.iene = valor;
        });
      })
      .catch((err) => console.log('Erro: ', err));
  }
}
