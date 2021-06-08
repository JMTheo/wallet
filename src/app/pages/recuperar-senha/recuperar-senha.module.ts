import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputModule } from 'src/app/components/input/input.module';
import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaPageRoutingModule } from './recuperar-senha-routing.module';

import { RecuperarSenhaPage } from './recuperar-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    RecuperarSenhaPageRoutingModule
  ],
  declarations: [RecuperarSenhaPage]
})
export class RecuperarSenhaPageModule {}
