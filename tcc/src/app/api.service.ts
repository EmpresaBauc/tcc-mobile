import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://api-laravel.test/api';
  
  constructor(private httpClient: HttpClient ) { }
  getUsuarios(){
    //console.log("teste");
    return this.httpClient.get(this.URL_API+"/usuario",{});
    //console.log("teste");
  }

  createUsuario(nome, email, senha){
    //console.log("teste");

    //http://api-laravel.test/api/usuario?nome=Lucas Aguiar&email=de.lucas73@gmail.com&senha=123456
    return this.httpClient.post(this.URL_API+"/usuario?nome="+nome+"&email="+email+"&senha="+senha,{});
    //console.log("teste");
  }

  getUsuario(id){
    //console.log("teste");
    return this.httpClient.get(this.URL_API+"/usuario/"+id,{});
    //console.log("teste");
  }


}
