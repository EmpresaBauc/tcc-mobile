import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pintura } from './pintura.page';

const routes: Routes = [
  {
    path: '',
    component: Pintura,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinturaPageRoutingModule {}
