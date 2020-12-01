import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class Login {

  constructor(private apiService: ApiService) {}
  email = "";
  senha = "";
  autenticar(){
    this.apiService.validate(this.email, this.senha);
  }

}
