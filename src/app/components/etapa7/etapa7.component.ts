import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';
import preguntas from 'src/assets/json/preguntas.json';
@Component({
  selector: 'app-etapa7',
  templateUrl: './etapa7.component.html',
  styleUrls: ['./etapa7.component.scss']
})
export class Etapa7Component implements OnInit {

  dig: any = dign;
  Preguntas: any = preguntas;
  constructor() { }

  ngOnInit(): void {
  }

}
