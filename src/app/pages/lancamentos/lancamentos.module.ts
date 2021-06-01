import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancamentosPageRoutingModule } from './lancamentos-routing.module';

import { LancamentosPage } from './lancamentos.page';

import { LancamentosModalComponent } from 'src/app/components/lancamentos-modal/lancamentos-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancamentosPageRoutingModule
  ],
  declarations: [LancamentosPage, LancamentosModalComponent],
  entryComponents: [LancamentosModalComponent]
})
export class LancamentosPageModule {}
