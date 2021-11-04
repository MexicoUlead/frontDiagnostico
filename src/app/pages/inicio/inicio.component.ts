import { Component, OnInit } from '@angular/core';
import dign from '../../../';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  dig: any = dign;


  constructor() { }

  ngOnInit(): void {
  }

}
