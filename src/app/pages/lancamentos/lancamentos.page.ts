import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public lancamentos: Array<number> = [];
  public entradas: Array<string> = [];

  public mudarValor(entrada: string, index: number) {
    this.entradas[index] = entrada;
  }

  public adicionarLancamento() {
    this.lancamentos.push(this.lancamentos.length);
  }

  public retornarValores() {
    console.log(this.entradas);
  }

  ngOnInit() {}
}
