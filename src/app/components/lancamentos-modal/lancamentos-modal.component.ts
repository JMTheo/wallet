import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lancamentos-modal',
  templateUrl: './lancamentos-modal.component.html',
  styleUrls: ['./lancamentos-modal.component.scss'],
})
export class LancamentosModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
