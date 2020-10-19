import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Pintura } from './pintura.page';

import { PinturaPageRoutingModule } from './pintura-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinturaPageRoutingModule
  ],
  declarations: [Pintura]
})
export class PinturaPageModule {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
