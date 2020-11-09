import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alvenaria } from './alvenaria.page';

const routes: Routes = [
  {
    path: '',
    component: Alvenaria,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlvenariaPageRoutingModule {}
