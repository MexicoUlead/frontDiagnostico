import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.scss']
})
export class Etapa2Component implements OnInit {


  dig: any = dign;


  constructor() { }

  ngOnInit(): void {
  }

}
