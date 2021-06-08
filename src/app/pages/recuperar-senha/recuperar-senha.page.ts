import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  email = new FormControl('', Validators.required);
  error = '';

  ngOnInit() {}

  recuperarSenha() {
    this.fireauth
      .sendPasswordResetEmail(this.email.value)
      .then((data) => {
        this.presentToast(
          'Um email foi enviado para você recuperar',
          'bottom',
          3000
        ); // this is toastController
        this.router.navigateByUrl('/login');
      })
      .catch((err) => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });
    toast.present();
  }
}
