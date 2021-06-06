import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from '../../service/local-storage-service.service';

@Component({
  selector: 'app-lancamentos-modal',
  templateUrl: './lancamentos-modal.component.html',
  styleUrls: ['./lancamentos-modal.component.scss'],
})
export class LancamentosModalComponent implements OnInit {
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
    if (novoLancamento.id) {
      await this.LocalStorageService.addLancamento(novoLancamento);
    } else {
      alert('Não é possível salvar lançamento vazio');
    }

    this.fecharModal();
  }

  ngOnInit() {}
}