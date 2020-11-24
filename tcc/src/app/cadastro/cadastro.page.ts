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
    this.apiService.getDogs().subscribe((data)=>{
      console.log(data);
    });
  }


  // buscarDogs(){

  //   this.apiService.getDogs();

  // }

}
