import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/service/local-storage-service.service';

@Component({
  selector: 'app-atualizar-lancamento-modal',
  templateUrl: './atualizar-lancamento-modal.component.html',
  styleUrls: ['./atualizar-lancamento-modal.component.scss'],
})
export class AtualizarLancamentoModalComponent implements OnInit {
  
@Input() lancamento;

titulo = new FormControl('', Validators.required);
diaCompra = new FormControl('', Validators.required);
tipoOperacao = new FormControl('', Validators.required);
tipoTransacao = new FormControl('', Validators.required);
valor = new FormControl('', Validators.required);

constructor(
  private modalCtrl: ModalController,
  public LocalStorageService: LocalStorageService
) {}

async fecharModal() {
  await this.modalCtrl.dismiss();
}

//Salvando dados do modal dentro do Local Storage
async enviarDados() {
  let novoLancamento = {
    id: this.titulo.value + this.diaCompra.value,
    titulo: this.titulo.value,
    diaCompra: this.diaCompra.value,
    tipoOperacao: this.tipoOperacao.value,
    tipoTransacao: this.tipoTransacao.value,
    valor: this.valor.value,
  };

  console.log(this.titulo.value);
  let id = this.lancamento.id;
  await this.LocalStorageService.atualizarLancamento(id, novoLancamento);
  this.fecharModal();
}

ngOnInit() { 
  //Mostrando valores atuais no Input
  this.titulo.setValue(this.lancamento.titulo);
  this.diaCompra.setValue(this.lancamento.diaCompra);
  this.tipoOperacao.setValue(this.lancamento.tipoOperacao);
  this.tipoTransacao.setValue(this.lancamento.tipoTransacao);
  this.valor.setValue(this.lancamento.valor);
}

}
