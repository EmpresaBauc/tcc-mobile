import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-revestimentos',
  templateUrl: 'revestimentos.page.html',
  styleUrls: ['revestimentos.page.scss'],
})
export class Revestimentos {

  constructor() {}

  ladoX = 0;
  ladoY = 0;
  revestimentosTipo = "";
  qtdPeca = 0;
  qtdArgamassa = "";
  tempoPedreiro = "";
  tempoAjudante = "";
  temPeca = false;
  temArgamassa = false;
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

  calculaRevestimentos(){
    
    let ladoX = this.ladoX;
    let ladoY = this.ladoY;
    let revestimentosTipo;
    let tamanhoMetrosQuadrados = 0;
    let tamanhoMetrosQuadradosCalculo = 0
    let tamanhoRevestimento = 0;
    let quantidadeRevestimentos = 0;
    let quantidadeArgamassa = 0;
    let tempoPedreiro = "";
    let tempoPedreiroDec = 0;
    let tempoAjudanteDec = 0;
    let tempoAjudante = "";

    //calculando o tamanho em metros quadrados
    tamanhoMetrosQuadrados = ladoX *ladoY;

    //obtendo o tipo de piso
    revestimentosTipo = this.revestimentosTipo.split("-");

    //filtrando qual tipo de calculo de acordo com o piso
    if(revestimentosTipo[0]=="pp"){
      //console.log("Tipo Piso: "+revestimentosTipo[1]);
      revestimentosTipo = revestimentosTipo[1].split("x");
      tamanhoRevestimento = revestimentosTipo[0] * revestimentosTipo[1];
      tamanhoRevestimento = tamanhoRevestimento/10000;

      //calculando quantidade de piso
      tamanhoMetrosQuadradosCalculo = tamanhoMetrosQuadrados * 1.05;
      if(tamanhoMetrosQuadradosCalculo>0){
        quantidadeRevestimentos = tamanhoMetrosQuadradosCalculo/tamanhoRevestimento;
      }

      //calculando quantidade de argamasa
      quantidadeArgamassa = tamanhoMetrosQuadrados * 6.50;

      //calculando quantidade de tempos
      tempoPedreiroDec = tamanhoMetrosQuadrados*0.60;
      tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
      tempoAjudanteDec = tamanhoMetrosQuadrados*0.70;
      tempoAjudante = this.conversaoTempo(tempoAjudanteDec);

      //console.log("Tamanho Piso: "+tamanhoRevestimento.toString().replace(".",",")+" m²");
      //console.log("Tamanho Área (Considera Perda Ceramica): "+tamanhoMetrosQuadradosCalculo.toString().replace(".",",")+" m²");
      this.qtdPeca = this.float2int(quantidadeRevestimentos);
      this.qtdArgamassa = quantidadeArgamassa.toFixed(2).toString().replace(".",",")+" Kg";
      this.tempoPedreiro = tempoPedreiro;
      this.tempoAjudante =  tempoAjudante;
      this.temPeca = true;
      this.temAjudante = true;
      this.temPedreiro = true;
      this.temArgamassa = true;

    }else if(revestimentosTipo[0]=="ppc"){
      //console.log("Tipo Piso: "+revestimentosTipo[1]);
      revestimentosTipo = revestimentosTipo[1].split("x");
      tamanhoRevestimento = revestimentosTipo[0] * revestimentosTipo[1];
      tamanhoRevestimento = tamanhoRevestimento/10000;

      //calculando quantidade de piso
      tamanhoMetrosQuadradosCalculo = tamanhoMetrosQuadrados * 1.05;
      if(tamanhoMetrosQuadradosCalculo>0){
        quantidadeRevestimentos = tamanhoMetrosQuadradosCalculo/tamanhoRevestimento;
      }

      //calculando quantidade de argamasa
      quantidadeArgamassa = tamanhoMetrosQuadrados * 6.50;

      //calculando quantidade de tempos
      tempoPedreiroDec = tamanhoMetrosQuadrados*0.90;
      tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
      tempoAjudanteDec = tamanhoMetrosQuadrados*1.00;
      tempoAjudante = this.conversaoTempo(tempoAjudanteDec);

      //console.log("Tamanho Piso: "+tamanhoRevestimento.toString().replace(".",",")+" m²");
      //console.log("Tamanho Área (Considera Perda Ceramica): "+tamanhoMetrosQuadradosCalculo.toString().replace(".",",")+" m²");
      this.qtdPeca = this.float2int(quantidadeRevestimentos);
      this.qtdArgamassa = quantidadeArgamassa.toFixed(2).toString().replace(".",",")+" Kg";
      this.tempoPedreiro = tempoPedreiro;
      this.tempoAjudante =  tempoAjudante;
      this.temPeca = true;
      this.temAjudante = true;
      this.temPedreiro = true;
      this.temArgamassa = true;

    }else if(revestimentosTipo[0]=="mv"){
      //console.log("Tipo Piso: "+revestimentosTipo[1]);
      revestimentosTipo = revestimentosTipo[1].split("x");
      tamanhoRevestimento = revestimentosTipo[0] * revestimentosTipo[1];
      tamanhoRevestimento = tamanhoRevestimento/10000;

      //calculando quantidade de piso
      tamanhoMetrosQuadradosCalculo = tamanhoMetrosQuadrados * 1.10;
      if(tamanhoMetrosQuadradosCalculo>0){
        quantidadeRevestimentos = tamanhoMetrosQuadradosCalculo/tamanhoRevestimento;
      }

      //calculando quantidade de argamasa
      quantidadeArgamassa = tamanhoMetrosQuadrados * 5.60;


      //calculando quantidade de tempos
      tempoPedreiroDec = tamanhoMetrosQuadrados*1.50;
      tempoPedreiro = this.conversaoTempo(tempoPedreiroDec);
      tempoAjudanteDec = tamanhoMetrosQuadrados*1.50;
      tempoAjudante = this.conversaoTempo(tempoAjudanteDec);

      //console.log("Tamanho Piso: "+tamanhoRevestimento.toString().replace(".",",")+" m²");
      //console.log("Tamanho Área (Considera Perda Ceramica): "+tamanhoMetrosQuadradosCalculo.toString().replace(".",",")+" m²");
      this.qtdPeca = this.float2int(quantidadeRevestimentos);
      this.qtdArgamassa = quantidadeArgamassa.toFixed(2).toString().replace(".",",")+" Kg";
      this.tempoPedreiro = tempoPedreiro;
      this.tempoAjudante =  tempoAjudante;
      this.temPeca = true;
      this.temAjudante = true;
      this.temPedreiro = true;
      this.temArgamassa = true;

    }
    

  }
}
