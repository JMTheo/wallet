import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ultimos-lancamentos',
  templateUrl: './ultimos-lancamentos.component.html',
  styleUrls: ['./ultimos-lancamentos.component.scss'],
})
export class UltimosLancamentosComponent implements OnInit {

  constructor() {

  }
  @Input() srcImg: string
  @Input() diaCompra: string;
  @Input() titulo: string;
  @Input() valor: string;
  @Input() tipoTransacao: string;

  ngOnInit() {}

  corTexto() {
    let style = {
      'color': ''
    }
    if(this.tipoTransacao == 'saida') {
      style.color = 'red'
    } else {
      style.color = 'green'
    }
    return style;
  }

}
