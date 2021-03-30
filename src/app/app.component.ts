import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Moedas', url: '/moedas', icon: 'cash' },
    { title: 'Lançamentos', url: '/lancamentos', icon: 'checkmark' },
    { title: 'Configurações', url: '/configuracoes', icon: 'settings'},
    { title: 'Alterar Perfil', url: '/perfil', icon: 'person'},
    { title: 'Salário', url: '/salario', icon: 'cash'},
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
