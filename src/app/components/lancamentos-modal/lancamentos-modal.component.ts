import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-lancamentos-modal',
  templateUrl: './lancamentos-modal.component.html',
  styleUrls: ['./lancamentos-modal.component.scss'],
})
export class LancamentosModalComponent implements OnInit {
  
  titulo = new FormControl('', Validators.required);
  diaCompra = new FormControl('', Validators.required);
  tipoTransacao = new FormControl('', Validators.required);
  valor = new FormControl('', Validators.required);
    
  constructor(private modalCtrl: ModalController) { }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviarDados(){
    this.fecharModal();
  }

  ngOnInit() {}

}
