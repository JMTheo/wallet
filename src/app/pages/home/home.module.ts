import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ButtonHomeModule } from 'src/app/components/button-home/button-home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonHomeModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
