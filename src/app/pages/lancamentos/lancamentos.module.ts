import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LancamentosPageRoutingModule } from './lancamentos-routing.module';
import { LancamentosPage } from './lancamentos.page';
import { LancamentosModalComponent } from '../../components/lancamentos-modal/lancamentos-modal.component';
import { UltimosLancamentosModule } from '../../components/ultimos-lancamentos/ultimos-lancamentos.module';
import { AtualizarLancamentoModalComponent } from 'src/app/components/atualizar-lancamento-modal/atualizar-lancamento-modal.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LancamentosPageRoutingModule, 
    UltimosLancamentosModule
  ],
  declarations: [LancamentosPage, LancamentosModalComponent, AtualizarLancamentoModalComponent],
  entryComponents: [LancamentosModalComponent, AtualizarLancamentoModalComponent]
})
export class LancamentosPageModule {}