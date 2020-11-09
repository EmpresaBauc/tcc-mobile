import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Cadastro } from './cadastro.page';

import { CadastroPageRoutingModule } from './cadastro-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule
  ],
  declarations: [Cadastro]
})
export class CadastroPageModule {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
