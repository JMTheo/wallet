import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage-service.service';

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

  constructor(private storageService: LocalStorageService) {}
  async ngOnInit() {
    //this.getTheValue()
    this.storage = this.storageService;
  }
  ionViewDidEnter() {
    this.getTheValue();
  }
  async setTheValue() {
    let user = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      sexo: this.sexo,
      dataDeNasc: this.dataDeNasc,
      salario: this.salario,
    };
    await this.storage.set('user', user);
  }

  async getTheValue() {
    let userData = await this.storage.get('user');
    this.nome = userData.nome;
    this.sobrenome = userData.sobrenome;
    this.email = userData.email;
    this.dataDeNasc = userData.dataDeNasc;
    this.sexo = userData.sexo;
    this.salario = userData.salario;
  }
}
