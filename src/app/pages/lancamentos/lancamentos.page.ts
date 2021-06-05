import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';
import { IconLancamentosComponent } from 'src/app/components/icon-lancamentos/icon-lancamentos.component';
import { LocalStorageService } from '../../service/local-storage-service.service';
import { Lancamento } from '../../interface/lancamento';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  lancamentosList: Array<Lancamento>;
  storage: any;

  constructor(
    private modalCtrl: ModalController,
    private LocalStorageService: LocalStorageService
  ) {}

  async ngOnInit() {
    this.storage = this.LocalStorageService;
  }

  ionViewDidEnter() {
    this.retornaTodosLancamentos();
  }

  async abrirModal() {
    let modal = await this.modalCtrl.create({
      component: LancamentosModalComponent,
    });

    //Atualiza lista de lançamentos de acordo com o LocalStorage após fechar o modal
    modal.onDidDismiss().then(() => {
      this.retornaTodosLancamentos();
    });

    await modal.present();
  }

  //Atualiza lista de lançamentos
  async retornaTodosLancamentos() {
    this.lancamentosList = await this.storage.retornaTodosLancamentos();
  }
}
