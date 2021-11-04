import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';

@Component({
  selector: 'app-etapa5',
  templateUrl: './etapa5.component.html',
  styleUrls: ['./etapa5.component.scss']
})
export class Etapa5Component implements OnInit {


  dig: any = dign;


  constructor() { }

  ngOnInit(): void {
  }

}
