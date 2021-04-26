import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { UltimosLancamentosModule } from '../../components/ultimos-lancamentos/ultimos-lancamentos.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    UltimosLancamentosModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
