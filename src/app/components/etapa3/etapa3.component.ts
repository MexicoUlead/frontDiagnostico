import dign from '../../../assets/json/es.json';
import { Component, OnInit } from '@angular/core';


import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.scss']
})
export class Etapa3Component implements OnInit {

  public induccionSi: boolean = false;
  public tieneInduccion: string = '';
  dig: any = dign;

  Preguntas: any = preguntas;

  constructor() { }

  ngOnInit(): void {
  }

  radioChange1(event: any) {
    this.tieneInduccion = event.target.value;

    if (this.tieneInduccion === "si") {
      this.induccionSi = true;
    } else {
      this.induccionSi = false;
    }
  }
}
