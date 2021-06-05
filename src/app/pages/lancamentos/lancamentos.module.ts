import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentosPageRoutingModule } from './lancamentos-routing.module';

import { LancamentosPage } from './lancamentos.page';

import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';
import { UltimosLancamentosModule } from '../../components/ultimos-lancamentos/ultimos-lancamentos.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LancamentosPageRoutingModule, 
    UltimosLancamentosModule
  ],
  declarations: [LancamentosPage, LancamentosModalComponent],
  entryComponents: [LancamentosModalComponent]
})
export class LancamentosPageModule {}
