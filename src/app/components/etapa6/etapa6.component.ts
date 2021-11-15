import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';
import preguntas from 'src/assets/json/preguntas.json';
@Component({
  selector: 'app-etapa6',
  templateUrl: './etapa6.component.html',
  styleUrls: ['./etapa6.component.scss']
})
export class Etapa6Component implements OnInit {


  dig: any = dign;
  Preguntas: any = preguntas;

  constructor() { }

  ngOnInit(): void {
  }

}
