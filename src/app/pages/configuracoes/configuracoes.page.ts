import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage-service.service'

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  storage: any;
  nome: string;
  sobrenome: string;
  email: string;
  dataDeNasc: Date;
  sexo: string;
  salario: number;

  constructor(private storageService: LocalStorageService) {
  }
  async ngOnInit() {
    //this.getTheValue()
    this.storage = this.storageService;
  }
  ionViewDidEnter() {
    this.getTheValue();
  }
  async setTheValue() {
    await this.storage.set('nome', this.nome);
    await this.storage.set('sobrenome', this.sobrenome);
    await this.storage.set('email', this.email);
    await this.storage.set('dataDeNasc', this.dataDeNasc);
    await this.storage.set('sexo', this.sexo);
    await this.storage.set('salario', this.salario);
  }

  async getTheValue() {
    this.nome = await this.storage.get('nome');
    this.sobrenome = await this.storage.get('sobrenome');
    this.email = await this.storage.get('email');
    this.dataDeNasc = await this.storage.get('dataDeNasc');
    this.sexo = await this.storage.get('sexo');
    this.salario = await this.storage.get('salario');
  }
}
