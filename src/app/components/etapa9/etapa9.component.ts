import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';


@Component({
  selector: 'app-etapa9',
  templateUrl: './etapa9.component.html',
  styleUrls: ['./etapa9.component.scss']
})
export class Etapa9Component implements OnInit {
  dig: any = dign;

  constructor() { }

  ngOnInit(): void {
  }

}
