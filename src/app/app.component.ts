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
    { title: 'Configurações', url: '/configuracoes', icon: 'settings'}
  ];
  constructor() {}
}
