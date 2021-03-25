import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonHomeComponent } from './button-home.component';



@NgModule({
  declarations: [ButtonHomeComponent],
  exports: [ButtonHomeComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonHomeModule { }
