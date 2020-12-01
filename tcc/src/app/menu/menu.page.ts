import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class Menu {

  constructor(private apiService: ApiService) {}

  nomeUsuario = this.apiService.nomeUsuario;
  idUsuario = this.apiService.idUsuario;
  emailUsuario = this.apiService.emailUsuario;
  statusUsuario = this.apiService.statusUsuario;
  mensagemUsuario = this.apiService.mensagemUsuario;

  public verificaDeslogado(){
    if(this.statusUsuario == true){
      return false;
    }else{
      return true;
    }
  }

  public verificaLogado(){
    if(this.statusUsuario == true){
      return true;
    }else{
      return false;
    }
  }

}
