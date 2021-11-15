import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
