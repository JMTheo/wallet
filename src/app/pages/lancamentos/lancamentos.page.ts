import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public lancamentos: Array<number> = [];
  public entradas: Array<string> = [];

  constructor(private modalCtrl: ModalController) { }

  async abrirModal() {
    
    let modal = await this.modalCtrl.create({
      component: LancamentosModalComponent
    });
  
  await modal.present();
}



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
    
    //Faz toggle para input ficar desabilitado após adicionado

    const buttons: any = document.getElementsByTagName("ion-button");

    if(inputId.toggleAttribute("disabled")){
      buttons[+ buttonId.substr(2) + 1].innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
    }else{
      buttons[+ buttonId.substr(2) + 1].innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;
    }

    ;
  }


  
  

  ngOnInit() {}
}
