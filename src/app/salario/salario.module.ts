import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalarioPageRoutingModule } from './salario-routing.module';

import { SalarioPage } from './salario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalarioPageRoutingModule
  ],
  declarations: [SalarioPage]
})
export class SalarioPageModule {}
