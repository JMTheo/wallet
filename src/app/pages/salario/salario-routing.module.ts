import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalarioPage } from './salario.page';

const routes: Routes = [
  {
    path: '',
    component: SalarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalarioPageRoutingModule {}
