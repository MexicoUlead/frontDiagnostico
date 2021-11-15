import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';


import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.scss']
})
export class Etapa2Component implements OnInit {


  dig: any = dign;

  Preguntas: any = preguntas;

  constructor() { }

  ngOnInit(): void {

  }

}
