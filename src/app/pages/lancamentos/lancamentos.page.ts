import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public lancamento = [];
  public entrada: number;
  public teste: number;
  public adicionarLancamento(entrada: number) {
    this.lancamento.push(entrada);
  }

  ngOnInit() {}
}
