import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';

@Component({
  selector: 'app-etapa8',
  templateUrl: './etapa8.component.html',
  styleUrls: ['./etapa8.component.scss']
})
export class Etapa8Component implements OnInit {


  dig: any = dign;


  constructor() { }

  ngOnInit(): void {
  }

}
