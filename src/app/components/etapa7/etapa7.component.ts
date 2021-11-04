import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';

@Component({
  selector: 'app-etapa7',
  templateUrl: './etapa7.component.html',
  styleUrls: ['./etapa7.component.scss']
})
export class Etapa7Component implements OnInit {

  dig: any = dign;

  constructor() { }

  ngOnInit(): void {
  }

}
