import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu.page';

import { MenuPageRoutingModule } from './menu-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [Menu]
})
export class MenuPageModule {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
