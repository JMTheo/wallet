import { RegistrarPage } from './registrar.page';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPageRoutingModule } from './Registrar-routing.module';

import { InputModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    RegistrarPageRoutingModule,
  ],
  declarations: [RegistrarPage],
})
export class RegistrarPageModule {}