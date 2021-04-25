import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}
