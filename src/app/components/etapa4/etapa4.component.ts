import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';

import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-etapa4',
  templateUrl: './etapa4.component.html',
  styleUrls: ['./etapa4.component.scss']
})
export class Etapa4Component implements OnInit {


  dig: any = dign;

  Preguntas: any = preguntas;

  constructor() { }

  ngOnInit(): void {
  }

}
