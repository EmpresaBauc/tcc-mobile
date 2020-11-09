import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Revestimentos } from './revestimentos.page';

import { RevestimentosPageRoutingModule } from './revestimentos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevestimentosPageRoutingModule
  ],
  declarations: [Revestimentos]
})
export class RevestimentosPageModule {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
