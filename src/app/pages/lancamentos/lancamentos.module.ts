import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentosPageRoutingModule } from './lancamentos-routing.module';

import { LancamentosPage } from './lancamentos.page';

import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';
import { UltimosLancamentosModule } from '../../components/ultimos-lancamentos/ultimos-lancamentos.module';
import { IconLancamentosModule } from '../../components/icon-lancamentos/icon-lancamentos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LancamentosPageRoutingModule, 
    UltimosLancamentosModule,
    IconLancamentosModule
  ],
  declarations: [LancamentosPage, LancamentosModalComponent],
  entryComponents: [LancamentosModalComponent]
})
export class LancamentosPageModule {}
