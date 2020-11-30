import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-alvenaria',
  templateUrl: 'alvenaria.page.html',
  styleUrls: ['alvenaria.page.scss'],
})
export class Alvenaria {

  constructor() {}

  ladoX = 0;
  ladoY = 0;
  alvenariaTipo = "";
  qtdTijolos = 0;
  qtdAreia = "";
  qtdCimento = "";
  tempoPedreiro = "";
  tempoAjudante = "";
  temTijolos = false;
  temAreia = false;
  temCimento = false;
  temPedreiro = false;
  temAjudante = false; 
  
  float2int (value) {
    return Math.round(value) | 0;
  }

  conversaoTempo(quantidade){
    let quantidadeMinutos = 0
    let quantidadeHoras = 0;
    let tempo = "";
    quantidadeMinutos = quantidade * 60;

    if(quantidadeMinutos>60){
      quantidadeHoras = quantidadeMinutos/60;
      quantidadeMinutos = quantidadeMinutos%60;
    }

    quantidadeHoras = this.float2int(quantidadeHoras);
    quantidadeMinutos = this.float2int(quantidadeMinutos);
    
    if(quantidadeHoras == 0){
      tempo = quantidadeMinutos+" minutos";
    }else{
      tempo = quantidadeHoras+" horas e "+quantidadeMinutos+" minutos";
    }
    return(tempo);
  }

  calculaAlvenaria(){

    let ladoX = this.ladoX;
    let ladoY = this.ladoY;
    let alvenariaTipo;
    let tamanhoMetrosQuadrados = 0;
    let tamanhoTijolos = 0;//19x39
    let quantidadeTijolos = 0;
    let quantidadeAreia = 0;
    let quantidadeCimento = 0;
    let tempoPedreiro = "";
    let tempoPedreiroDec = 0;
    let tempoAjudanteDec = 0;
    let tempoAjudante = "";

    //calculando o tamanho em metros quadrados
    tamanhoMetrosQuadrados = ladoX *ladoY;

    //obtendo o tipo de piso
    alvenariaTipo = this.alvenariaTipo.split("-");

    //filtrando qual tipo de calculo de acordo com o piso
    if(alvenariaTipo[0]=="al"){
       //console.log("Tipo Piso: "+alvenariaTipo[1]);
      //  tamanhoTijolos = 19 * 39;
      //  tamanhoTijolos = tamanhoTijolos/10000;
 
       //calculando quantidade de piso
       if(tamanhoMetrosQuadrados>0){
         quantidadeTijolos = tamanhoMetrosQuadrados*13.10;
       }
 
       //calculando quantidade de areia e cimento
       quantidadeAreia = tamanhoMetrosQuadrados * 0.016348;
       quantidadeCimento = tamanhoMetrosQuadrados * 3.618;
 
       //calculando quantidade de tempos
       tempoPedreiroDec = tamanhoMetrosQuadrados*0.70;
       tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
       tempoAjudanteDec = tamanhoMetrosQuadrados*0.83;
       tempoAjudante = this.conversaoTempo(tempoAjudanteDec);
 

     
       //console.log("Tamanho Piso: "+tamanhoTijolos.toString().replace(".",",")+" m²");
       //console.log("Tamanho Área (Considera Perda Ceramica): "+tamanhoMetrosQuadradosCalculo.toString().replace(".",",")+" m²");
       this.qtdTijolos = this.float2int(quantidadeTijolos);
       this.qtdAreia = quantidadeAreia.toFixed(2).toString().replace(".",",")+" m³";
       this.qtdCimento = quantidadeCimento.toFixed(2).toString().replace(".",",")+" Kg";
       this.tempoPedreiro = tempoPedreiro;
       this.tempoAjudante =  tempoAjudante;
       this.temTijolos = true;
       this.temAreia = true;
       this.temCimento = true;
       this.temPedreiro = true;
       this.temAjudante = true; 
    }


  }


}
