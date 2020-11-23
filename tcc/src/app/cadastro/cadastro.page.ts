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

  teste(){
    console.log("teste");
  }


  // buscarDogs(){

  //   this.apiService.getDogs();

  // }

}
