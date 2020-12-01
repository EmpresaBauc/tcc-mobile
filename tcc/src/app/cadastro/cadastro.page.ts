import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class Cadastro {

  // constructor() {}

  constructor(private apiService: ApiService) {}
  nome = "";
  email = "";
  senha = "";
  senhaConfirmar = "";
  

  cadastrarUsuario(){
    let nomeValue = this.nome;
    let emailValue = this.email;
    let senhaValue = this.senha;
    let confirmarsenhaValue = this.senhaConfirmar;

    if(senhaValue == confirmarsenhaValue){
      this.apiService.createUsuario(nomeValue, emailValue, senhaValue).subscribe((data)=>{
        this.nome = "";
        this.email = "";
        this.senha = "";
        this.senhaConfirmar = "";
        alert("Cadastrado com sucesso!");
      });
    }else{
      alert("Senha não confere!");
      this.senha = "";
      this.senhaConfirmar = "";
    }
  }

  // buscarDogs(){

  //   this.apiService.getDogs();

  // }

}
