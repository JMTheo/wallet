import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';

import { LocalStorageService } from '../../service/local-storage-service.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public lancamentosList: Array<object> = [];

  constructor(private modalCtrl: ModalController, public LocalStorageService: LocalStorageService) { }

  async abrirModal() {
    
    let modal = await this.modalCtrl.create({
      component: LancamentosModalComponent,
    });

    //Atualiza lista de lançamentos de acordo com o LocalStorage após fechar o modal
    modal.onDidDismiss().then(() => {
      this.retornaTodosLancamentos();
    })
  
  await modal.present();
}

//Atualiza lista de lançamentos
retornaTodosLancamentos(){
  console.log(this.lancamentosList);
  this.lancamentosList = this.LocalStorageService.retornaTodosLancamentos();
}
 
  ngOnInit() {
    this.retornaTodosLancamentos();
  }
}
