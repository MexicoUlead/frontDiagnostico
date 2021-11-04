import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';


@Component({
  selector: 'etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.scss']
})
export class Etapa1Component implements OnInit {


  dig: any = dign;

  constructor() { }


  ngOnInit(): void {
  }


}
