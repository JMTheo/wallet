import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IconLancamentosComponent } from './icon-lancamentos.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [IconLancamentosComponent],
  exports : [IconLancamentosComponent]
})
export class IconLancamentosModule {}
