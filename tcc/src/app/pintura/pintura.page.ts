import { Component } from '@angular/core';

@Component({
  selector: 'app-pintura',
  templateUrl: 'pintura.page.html',
  styleUrls: ['pintura.page.scss'],
})
export class Pintura {

  constructor() {}

  ladoX = 0;
  ladoY = 0;
  pinturaTipos = "";
  qtdLitros = "";
  tempoPintor = "";
  tempoAjudPintor = "";
  temLitros = false;
  temPintor = false;
  temAjudante = false;
  
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

  calculaPintura(){
    
    let ladoX = this.ladoX;
    let ladoY = this.ladoY;
    let tamanhoMetrosQuadrados = 0;
    let quantidadeTinta = 0;
    let tempoPintor = "";
    let tempoAjudante = "";
  
    //calculando o tamanho em metros quadrados
    tamanhoMetrosQuadrados = ladoX *ladoY;


    if(this.pinturaTipos=="ta"){
      quantidadeTinta = tamanhoMetrosQuadrados*0.30;
      tempoPintor = this.conversaoTempo(tamanhoMetrosQuadrados*1.20);
      tempoAjudante = this.conversaoTempo(tamanhoMetrosQuadrados*0.30);

      
      this.qtdLitros = quantidadeTinta.toFixed(2).toString().replace(".",",")+" litros";
      this.tempoPintor = tempoPintor;
      this.tempoAjudPintor = tempoAjudante;

      this.temLitros = true;
      this.temPintor = true;
      this.temAjudante = true;
    }else if(this.pinturaTipos=="tlapx"){
      quantidadeTinta = tamanhoMetrosQuadrados*0.17;
      tempoPintor = this.conversaoTempo(tamanhoMetrosQuadrados*0.40);
      tempoAjudante = this.conversaoTempo(tamanhoMetrosQuadrados*0.35);

      
      this.qtdLitros = quantidadeTinta.toFixed(2).toString().replace(".",",")+" litros";
      this.tempoPintor = tempoPintor;
      this.tempoAjudPintor = tempoAjudante;

      this.temLitros = true;
      this.temPintor = true;
      this.temAjudante = true;

    }else if(this.pinturaTipos=="pisc"){
      quantidadeTinta = tamanhoMetrosQuadrados*0.34;
      tempoPintor = this.conversaoTempo(tamanhoMetrosQuadrados*0.44);
      tempoAjudante = this.conversaoTempo(tamanhoMetrosQuadrados*0.22);

      
      this.qtdLitros = quantidadeTinta.toFixed(2).toString().replace(".",",")+" litros";
      this.tempoPintor = tempoPintor;
      this.tempoAjudPintor = tempoAjudante;

      this.temLitros = true;
      this.temPintor = true;
      this.temAjudante = true;
    }
    

  }

}
