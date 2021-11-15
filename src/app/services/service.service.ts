import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { diagInterface } from '../interfaces/diagInterface.interfaces';

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

}

