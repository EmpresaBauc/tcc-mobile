import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://api-laravel.test/api';
  
  constructor(private httpClient: HttpClient ) { }
  getDogs(){
    //console.log("teste");
    return this.httpClient.get(this.URL_API+"/dogs",{});
    //console.log("teste");

  }

}
