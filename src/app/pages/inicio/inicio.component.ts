import { Component, OnInit } from '@angular/core';
//import dign from '../../../';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //dig: any = dign;


  sh: any;
  Preguntas: any = preguntas;
  //Etapa1
  public politicaSi: boolean = false;
  public tienePoliticas: string = '';
  public seguroSi: boolean = false;
  public tieneSeguro: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  //etapa 1
  radioChange(event: any) {
    this.tienePoliticas = event.currentTarget.checked;

    if (this.tienePoliticas) {
      this.politicaSi = true;
    } else {
      this.politicaSi = false;
    }
  }

  radioChange2(event: any) {
    this.tieneSeguro = event.currentTarget.checked;

    if (this.tieneSeguro) {
      this.seguroSi = true;
    } else {
      this.seguroSi = false;
    }
  }
}
