import { RegistrarPage } from './registrar.page';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { RegistrarPageRoutingModule } from './registrar-routing.module';

import { InputModule } from 'src/app/components/input/input.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPageRoutingModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [RegistrarPage],
})
export class RegistrarPageModule {}
