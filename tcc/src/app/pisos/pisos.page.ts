import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-pisos',
  templateUrl: 'pisos.page.html',
  styleUrls: ['pisos.page.scss'],
})
export class Pisos {

  constructor() {}

  ladoX = 0;
  ladoY = 0;
  pisosTipo = "";
  qtdPeca = 0;
  qtdArgamassa = "";
  tempoPedreiro = "";
  tempoAjudante = "";
  temPeca = true;
  temAjudante = true; 
  
  float2int (value) {
    return value | 0;
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

  calculaPiso(){
    
    let ladoX = this.ladoX;
    let ladoY = this.ladoY;
    let tipoPiso;
    let tamanhoMetrosQuadrados = 0;
    let tamanhoMetrosQuadradosCalculo = 0
    let tamanhoPiso = 0;
    let quantidadePiso = 0;
    let quantidadeArgamassa = 0;
    let tempoPedreiro = "";
    let tempoPedreiroDec = 0;
    let tempoAjudanteDec = 0;
    let tempoAjudante = "";

    //calculando o tamanho em metros quadrados
    tamanhoMetrosQuadrados = ladoX *ladoY;

    //obtendo o tipo de piso
    tipoPiso = this.pisosTipo.split("-");

    //filtrando qual tipo de calculo de acordo com o piso
    if(tipoPiso[0]=="pc"){
      //console.log("Tipo Piso: "+tipoPiso[1]);
      tipoPiso = tipoPiso[1].split("x");
      tamanhoPiso = tipoPiso[0] * tipoPiso[1];
      tamanhoPiso = tamanhoPiso/10000;

      //calculando quantidade de piso
      tamanhoMetrosQuadradosCalculo = tamanhoMetrosQuadrados * 1.19;
      if(tamanhoMetrosQuadradosCalculo>0){
        quantidadePiso = tamanhoMetrosQuadradosCalculo/tamanhoPiso;
      }

      //calculando quantidade de argamasa
      quantidadeArgamassa = tamanhoMetrosQuadrados * 4.40;

      //calculando quantidade de tempos
      tempoPedreiroDec = tamanhoMetrosQuadrados*0.44;
      tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
      tempoAjudanteDec = tamanhoMetrosQuadrados*0.22;
      tempoAjudante = this.conversaoTempo(tempoAjudanteDec);

      //console.log("Tamanho Piso: "+tamanhoPiso.toString().replace(".",",")+" m²");
      //console.log("Tamanho Área (Considera Perda Ceramica): "+tamanhoMetrosQuadradosCalculo.toString().replace(".",",")+" m²");
      this.qtdPeca = this.float2int(quantidadePiso);
      this.qtdArgamassa = quantidadeArgamassa.toFixed(2).toString().replace(".",",")+" Kg";
      this.tempoPedreiro = tempoPedreiro;
      this.tempoAjudante =  tempoAjudante;
      this.temPeca = true;
      this.temAjudante = true;

    }else if(tipoPiso[0]=="rpc"){
      console.log("Tipo Piso: "+tipoPiso[1]);
      tipoPiso = tipoPiso[1].split("x");
      
      //calculando quantidade de argamassa
      quantidadeArgamassa = tamanhoMetrosQuadrados*0.529;

      
      //calculando quantidade de tempo
      tempoPedreiroDec = tamanhoMetrosQuadrados*0.25;
      tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
      this.temPeca = false;
      this.temAjudante = false;
      this.qtdArgamassa = quantidadeArgamassa.toFixed(2).toString().replace(".",",")+" Kg";
      this.tempoPedreiro = tempoPedreiro;

    }else if(tipoPiso[0]=="porc"){
      //console.log("Tipo Piso: "+tipoPiso[1]);
      tipoPiso = tipoPiso[1].split("x");
      tamanhoPiso = tipoPiso[0] * tipoPiso[1];
      tamanhoPiso = tamanhoPiso/10000;

      //calculando quantidade de piso
      tamanhoMetrosQuadradosCalculo = tamanhoMetrosQuadrados * 1.19;
      if(tamanhoMetrosQuadradosCalculo>0){
        quantidadePiso = tamanhoMetrosQuadradosCalculo/tamanhoPiso;
      }

      //calculando quantidade de argamasa
      quantidadeArgamassa = tamanhoMetrosQuadrados * 9;


      //calculando quantidade de tempos
      tempoPedreiroDec = tamanhoMetrosQuadrados*0.44;
      tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
      tempoAjudanteDec = tamanhoMetrosQuadrados*0.22;
      tempoAjudante = this.conversaoTempo(tempoAjudanteDec);

      //console.log("Tamanho Piso: "+tamanhoPiso.toString().replace(".",",")+" m²");
      //console.log("Tamanho Área (Considera Perda Ceramica): "+tamanhoMetrosQuadradosCalculo.toString().replace(".",",")+" m²");
      this.qtdPeca = this.float2int(quantidadePiso);
      this.qtdArgamassa = quantidadeArgamassa.toFixed(2).toString().replace(".",",")+" Kg";
      this.tempoPedreiro = tempoPedreiro;
      this.tempoAjudante =  tempoAjudante;
      this.temPeca = true;
      this.temAjudante = true;

    }
    

  }
}
