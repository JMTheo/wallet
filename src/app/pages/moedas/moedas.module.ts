import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoedasPageRoutingModule } from './moedas-routing.module';

import { MoedasPage } from './moedas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedasPageRoutingModule
  ],
  declarations: [MoedasPage]
})
export class MoedasPageModule {}
