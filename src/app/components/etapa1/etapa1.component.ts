import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';
import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.scss']
})
export class Etapa1Component implements OnInit {

  public politicaSi: boolean = false;
  public tienePoliticas: string = '';
  public seguroSi: boolean = false;
  public tieneSeguro: string = '';
  dig: any = dign;
  Preguntas: any = preguntas;

  constructor() { }


  ngOnInit(): void {
    
  }

  radioChange(event:any){
    this.tienePoliticas = event.target.value;

    if(this.tienePoliticas === "si"){
      this.politicaSi = true;
    }else{
      this.politicaSi = false;
    }
  }

  radioChange2(event:any){
    this.tieneSeguro = event.target.value;

    if(this.tieneSeguro === "si"){
      this.seguroSi = true;
    }else{
      this.seguroSi = false;
    }
  }
}
