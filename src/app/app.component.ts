import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' }
  ];
  constructor(private fireauth: AngularFireAuth, private router: Router, private toastController: ToastController) {}

  logout() {
    this.fireauth.signOut().then(() => {
      this.presentToast();
      this.router.navigate(['/login']);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Saindo...',
      position: 'bottom',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
}
