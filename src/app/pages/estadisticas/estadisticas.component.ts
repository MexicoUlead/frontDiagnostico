import { Component, OnInit } from '@angular/core';
import { diagnostico } from 'src/app/models/diagnostico.model';
import { ServiceService } from 'src/app/services/service.service';
import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  public diagnosticos: diagnostico[] = [];
  public totalDiagnosticos: number = 0;
  public diagnostico: any[] = [];
  Preguntas: any = preguntas;


  constructor(private diagnoServ: ServiceService) { }


  ngOnInit(): void {

    this.diagnoServ.cargarDiagnosticos().subscribe(({ total, diagnosticos }) => {

      console.log(this.diagnosticos);

      this.diagnosticos = diagnosticos;
      this.totalDiagnosticos = total;

    })

  }


  buscar(busqueda: string) {

    if (busqueda.length === 0) return;

    this.diagnoServ.busquedaDiagn(busqueda).subscribe(({ diagnosticos }) => {
      console.log(diagnosticos);
      this.diagnostico = diagnosticos
    })

  }


}
