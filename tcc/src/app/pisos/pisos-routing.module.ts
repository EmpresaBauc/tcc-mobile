import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pisos } from './pisos.page';

const routes: Routes = [
  {
    path: '',
    component: Pisos,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PisosPageRoutingModule {}
