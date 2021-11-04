import dign from '../../../assets/json/es.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.scss']
})
export class Etapa3Component implements OnInit {


  dig: any = dign;

  constructor() { }

  ngOnInit(): void {
  }

}
