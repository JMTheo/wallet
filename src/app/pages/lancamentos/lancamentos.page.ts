import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public lancamentos: Array<object> = [];
  public entradas: Array<string> = [];

  constructor(private modalCtrl: ModalController) { }

  async abrirModal() {
    
    let modal = await this.modalCtrl.create({
      component: LancamentosModalComponent,
    });
  
  await modal.present();
}

// Verifcar necessidade
  public mudarValor(entrada: string, index: number) {
    this.entradas[index] = entrada;
  }
 
  ngOnInit() {}
}
