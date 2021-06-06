import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ultimos-lancamentos',
  templateUrl: './ultimos-lancamentos.component.html',
  styleUrls: ['./ultimos-lancamentos.component.scss'],
})
export class UltimosLancamentosComponent implements OnInit {
  constructor() {}
  @Input() srcImg: string;
  @Input() diaCompra: string;
  @Input() titulo: string;
  @Input() valor: string;
  @Input() tipoTransacao: string;
  @Input() tipoOperacao: string;



  ngOnInit() {
    this.diaCompra = new Date(this.diaCompra).toLocaleDateString();
  }

  corTexto() {
    let style = {
      color: '',
    };
    if (this.tipoOperacao == 'saida') {
      style.color = 'red';
    } else {
      style.color = 'green';
    }
    return style;
  }

  iconeLancamento(tipoTransacao:string) {
    this.tipoTransacao = tipoTransacao;
    switch (this.tipoTransacao) {
      case 'salario': {
        this.srcImg = "https://image.freepik.com/free-vector/money-bags-coins-flat-design-vector-illustration_16734-107.jpg";
        break;
      }
      case 'boleto': {
        this.srcImg = "https://www.sicoobsc.com.br/cruzalta/wp-content/uploads/sites/46/2014/05/icon_pagamento.png"
        break;
      }
      case 'imovel': {
        this.srcImg = 'https://e7.pngegg.com/pngimages/98/702/png-clipart-font-awesome-computer-icons-house-icon-design-house-angle-logo.png';
        break;
      }

      case 'investimentos': {
     this.srcImg = "https://static.vecteezy.com/ti/vetor-gratis/p1/2519573-investimento-grafico-icone-design-ilustracao-vetor.jpg"
     break;
      }
      case 'alimentacao': {
        this.srcImg = "https://i.pinimg.com/originals/83/04/31/830431f04b70f189d95cd42e4bf1d502.jpg";
        break;
      }
      default: {
        this.srcImg = '';
        this.tipoTransacao = ""
        break;
      }
    }
    return this.srcImg;
  }
}
