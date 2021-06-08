import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage-service.service';
import { User } from '../../interface/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

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
  user;
  listaUsuarios: Array<User>;
  error;

  constructor(
    private storageService: LocalStorageService,
    private fireauth: AngularFireAuth,
    private toastController: ToastController
  ) {}
  async ngOnInit() {
    //this.preencherCamposUsuario()
    this.storage = this.storageService;
  }

  ionViewDidEnter() {
    this.limparCampos();
    this.fireauth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.email = user.email;
      }
    });
    this.retornarUsuarios();
    this.preencherCamposUsuario();
  }

  updateEmail() {
    this.user
      .updateEmail(this.email)
      .then(() => {
        this.presentToast('Perfil atualizado com sucesso', 1000, 'bottom');
        this.error = '';
      })
      .catch((err) => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  async setTheValue() {
    let user: User = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      sexo: this.sexo,
      dataDeNasc: this.dataDeNasc,
      salario: this.salario,
    };
    await this.storage.addUser(user);

    this.updateEmail();
  }

  async preencherCamposUsuario() {
    if (this.listaUsuarios) {
      this.listaUsuarios.forEach((el) => {
        if (el.email == this.user.email) {
          this.nome = el.nome;
          this.sobrenome = el.sobrenome;
          this.dataDeNasc = el.dataDeNasc;
          this.sexo = el.sexo;
          this.salario = el.salario;
        } else {
          this.presentToast(
            'Não foi possível encontrar dados desse usuário',
            'bottom',
            2000
          );
        }
      });
    }
  }

  async retornarUsuarios() {
    this.listaUsuarios = await this.storage.retornarTodosUsuarios();
  }

  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });
    toast.present();
  }

  limparCampos() {
    this.nome = '';
    this.sobrenome = '';
    this.email = '';
    this.sexo = '';
    this.dataDeNasc = null;
    this.salario = 0;
  }
}
