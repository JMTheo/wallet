import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MoedasPageRoutingModule } from './moedas-routing.module';

import { MoedasPage } from './moedas.page';

import { ChartsModule, Label } from 'ng2-charts';
import { ChartDataSets, ChartType } from 'chart.js';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedasPageRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  declarations: [MoedasPage]
})
export class MoedasPageModule {
 
}

