import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { diagInterface } from '../interfaces/diagInterface.interfaces';
import { diagnostico } from '../models/diagnostico.model';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // https://back-diagnostico.herokuapp.com/api/diagnosticos

  constructor(private http: HttpClient) { }

  crearDiagnostico(formData: diagInterface) {

    return this.http.post(`${baseUrl}/diagnosticos`, formData);

  }


  async subirFile(archivo: File, id: string, tipo: string) {

    try {

      const url = `${baseUrl}/upload/${tipo}/${id}`;
      const formData = new FormData();
      formData.append('file', archivo);

      const resp = await fetch(url, {
        method: 'PUT',
        body: formData
      });

      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  cargarDiagnosticos() {

    const url = `${baseUrl}/diagnosticos`;
    return this.http.get<{ total: number, diagnosticos: diagnostico[] }>(url);

  }


  busquedaDiagn(busqueda: string) {

    const url = `${baseUrl}/todo/${busqueda}`;
    return this.http.get<{ diagnosticos: any[0] }>(url)

  }


  fileReturn(file: any) {
    const url = `${baseUrl}/upload/${file}`;
    //    return this.http.get
  }
}

