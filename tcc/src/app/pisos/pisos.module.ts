import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Pisos } from './pisos.page';

import { PisosPageRoutingModule } from './pisos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosPageRoutingModule
  ],
  declarations: [Pisos]
})
export class PisosPageModule {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
