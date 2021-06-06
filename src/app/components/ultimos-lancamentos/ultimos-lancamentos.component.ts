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
      case 'viagem': {
        this.srcImg = "https://static.vecteezy.com/ti/vetor-gratis/p1/582267-icone-de-aviao-gr%C3%A1tis-vetor.jpg";
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
      case 'estudos': {
        this.srcImg = "https://image.flaticon.com/icons/png/512/291/291903.png"
        this.srcImg = "https://w7.pngwing.com/pngs/629/901/png-transparent-computer-icons-learning-study-skills-student-silhouette-share-icon-experience-%D1%82%D0%B0%D1%82%D1%83.png"
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
