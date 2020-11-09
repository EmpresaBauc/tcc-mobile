import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Alvenaria } from './alvenaria.page';

import { AlvenariaPageRoutingModule } from './alvenaria-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlvenariaPageRoutingModule
  ],
  declarations: [Alvenaria]
})
export class AlvenariaPageModule {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
