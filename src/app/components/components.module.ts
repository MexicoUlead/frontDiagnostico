import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaComponent } from './grafica/grafica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Etapa1Component } from './etapa1/etapa1.component';
import { Etapa2Component } from './etapa2/etapa2.component';
import { Etapa3Component } from './etapa3/etapa3.component';
import { Etapa4Component } from './etapa4/etapa4.component';
import { Etapa5Component } from './etapa5/etapa5.component';
import { Etapa6Component } from './etapa6/etapa6.component';
import { Etapa7Component } from './etapa7/etapa7.component';
import { Etapa8Component } from './etapa8/etapa8.component';
import { Etapa9Component } from './etapa9/etapa9.component';
import { Etapa10Component } from './etapa10/etapa10.component';


@NgModule({
  declarations: [
    GraficaComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
    Etapa4Component,
    Etapa5Component,
    Etapa6Component,
    Etapa7Component,
    Etapa8Component,
    Etapa9Component,
    Etapa10Component
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
  ], exports: [
    GraficaComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
    Etapa4Component,
    Etapa5Component,
    Etapa6Component,
    Etapa7Component,
    Etapa8Component,
    Etapa9Component,
    Etapa10Component
  ]
})
export class ComponentsModule { }
