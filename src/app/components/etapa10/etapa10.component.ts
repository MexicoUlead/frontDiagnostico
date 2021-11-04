import { Component, OnInit } from '@angular/core';
import dign from '../../../assets/json/es.json';


@Component({
  selector: 'app-etapa10',
  templateUrl: './etapa10.component.html',
  styleUrls: ['./etapa10.component.scss']
})
export class Etapa10Component implements OnInit {
  dig: any = dign;

  constructor() { }

  ngOnInit(): void {
  }

}
