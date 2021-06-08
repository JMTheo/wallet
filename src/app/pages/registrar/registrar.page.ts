import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  email = new FormControl('', Validators.required);
  senha = new FormControl('', Validators.required);
  error: string = '';
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registrarUser() {
    this.fireauth
    .createUserWithEmailAndPassword(this.email.value, this.senha.value)
      .then(res => {
        if (res.user) {
          this.router.navigate(['/home']);
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
  }



}
