import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Revestimentos } from './revestimentos.page';

const routes: Routes = [
  {
    path: '',
    component: Revestimentos,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevestimentosPageRoutingModule {}
