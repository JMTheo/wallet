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

  //Função que altera a cor do valor imprimido na tela, vermelho(danger) para negativo e verde(success) para positivo.
  public adicionarValor(event: any){
    let buttonId: string = event.target.getAttribute("id");
    let inputId: any = document.getElementById(buttonId);

    if (+inputId.getAttribute("ng-reflect-model") > 0){
      inputId.setAttribute("color", "success");
    }else{
      inputId.setAttribute("color", "danger");
    }

    console.log(this.entradas);
  }

  ngOnInit() {}
}
