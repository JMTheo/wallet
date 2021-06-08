import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private fireauth: AngularFireAuth, private router: Router, private toastController: ToastController) {}
  email = new FormControl('', Validators.required);
  senha = new FormControl('', Validators.required);
  error: string = '';

  ngOnInit() {}

  login() {
    this.fireauth
      .signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then((res) => {
        if (res.user) {
          this.router.navigate(['/home']);
        }
      })
      .catch((err) => {
        console.log(`login failed ${err}`);
        this.error = err.message;
        this.presentToast();
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.error,
      position: 'bottom',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
