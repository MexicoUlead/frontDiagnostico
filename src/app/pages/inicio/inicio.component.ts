import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
//import dign from '../../../';


import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //  dig: any = dign;
  public formSubmit = false;

  public registerForm = this.fb.group({
    firma: ['', [Validators.required, Validators.minLength(2)]],
    nombreEmpresa: ['', [Validators.required, Validators.minLength(2)]],
    autoriza: ['', [Validators.required, Validators.minLength(2)]],
    antiguedad: ['', [Validators.required, Validators.minLength(2)]],
    typeOrganizacion: ['', [Validators.required, Validators.minLength(2)]],
    dSocio1: ['', [Validators.required, Validators.minLength(2)]],
    dSocio2: ['', [Validators.required, Validators.minLength(2)]],
    dSocio3: ['', [Validators.required, Validators.minLength(2)]],
    eTipoSociedad: ['', [Validators.required, Validators.minLength(2)]],
    fPoliticas: ['', [Validators.required, Validators.minLength(2)]],
    gPoliticasSi: ['', [Validators.required, Validators.minLength(2)]],
    hSeguroEmpresarial: ['', [Validators.required, Validators.minLength(2)]],
    iOrganigrama: ['', [Validators.required, Validators.minLength(2)]],
    // etapa2
    aVision: ['', [Validators.required, Validators.minLength(2)]],
    bMision: ['', [Validators.required, Validators.minLength(2)]],
    cCreencias: ['', [Validators.required, Validators.minLength(2)]],
    dValores: ['', [Validators.required, Validators.minLength(2)]],
    ePrincipios: ['', [Validators.required, Validators.minLength(2)]],
    fTipoDeLiderazgo: ['', [Validators.required, Validators.minLength(2)]],
    gEquipoDirectivo: ['', [Validators.required, Validators.minLength(2)]],
    hLogros: ['', [Validators.required, Validators.minLength(2)]],
    iProyectos: ['', [Validators.required, Validators.minLength(2)]],
    fortalezasDirectivo: ['', [Validators.required, Validators.minLength(2)]],
    debilidadesDirectivo: ['', [Validators.required, Validators.minLength(2)]],
    // Etapa3
    aProgramaCrecimiento: ['', [Validators.required, Validators.minLength(2)]],
    bRasgos: ['', [Validators.required, Validators.minLength(2)]],
    cCapacitacion: ['', [Validators.required, Validators.minLength(2)]],
    dPlanDeVida: ['', [Validators.required, Validators.minLength(2)]],
    eInduccion: ['', [Validators.required, Validators.minLength(2)]],
    ePorque: ['', [Validators.required, Validators.minLength(2)]],
    fMujeres: ['', [Validators.required, Validators.minLength(1)]],
    gHombres: ['', [Validators.required, Validators.minLength(1)]],
    hReactivo: ['', [Validators.required, Validators.minLength(2)]],
    fortalezasGeneral: ['', [Validators.required, Validators.minLength(2)]],
    debilidadesGeneral: ['', [Validators.required, Validators.minLength(2)]],
    // Etapa4
    aObjetivos: ['', [Validators.required, Validators.minLength(2)]],
    bFodaTime: ['', [Validators.required, Validators.minLength(2)]],
    bFodaPlanea: ['', [Validators.required, Validators.minLength(2)]],
    bFodaOportunidades: ['', [Validators.required, Validators.minLength(2)]],
    bFodaAmenazas: ['', [Validators.required, Validators.minLength(2)]],
    bFodaEstrategia: ['', [Validators.required, Validators.minLength(2)]],
    cControlGestion: ['', [Validators.required, Validators.minLength(2)]],
    cEsquema: ['', [Validators.required, Validators.minLength(2)]],
    // Etapa5
    aTipoEmpresa: ['', [Validators.required, Validators.minLength(2)]],
    bPlantas: [''],
    bTamaño: [''],
    cLineasPro: [''],
    dNumerosEmpleados: [''],
    eCapacidadProductiva: [''],
    fModificacionsPlanta: [''],
    gPorqueModificacion: [''],
    hTecnologia: [''],
    iManteyRep: [''],
    jMateriaPrima: [''],
    kHerramientas: [''],
    lSuministroG: [''],
    mFortalezas: [''],
    mDebilidades: [''],
    // Etapa6
    aMercadotecnica: ['', [Validators.required, Validators.minLength(2)]],
    bParticipacion: ['', [Validators.required, Validators.minLength(2)]],
    cLineasProd: ['', [Validators.required, Validators.minLength(2)]],
    dProdProm: ['', [Validators.required, Validators.minLength(2)]],
    eRegMar: ['', [Validators.required, Validators.minLength(2)]],
    fProm: ['', [Validators.required, Validators.minLength(2)]],
    gCadenaDis: ['', [Validators.required, Validators.minLength(2)]],
    hEscala: ['', [Validators.required, Validators.minLength(2)]],
    iTipoPublic: ['', [Validators.required, Validators.minLength(2)]],
    jFuerzaVen: ['', [Validators.required, Validators.minLength(2)]],
    kTipoDeCapac: ['', [Validators.required, Validators.minLength(2)]],
    lFortalezas: ['', [Validators.required, Validators.minLength(2)]],
    lDebilidades: ['', [Validators.required, Validators.minLength(2)]],
    // etapa7
    aPatentes: ['', [Validators.required, Validators.minLength(2)]],
    bInvProyect: ['', [Validators.required, Validators.minLength(2)]],
    cInvUniv: ['', [Validators.required, Validators.minLength(2)]],
    dProdCal: ['', [Validators.required, Validators.minLength(2)]],
    eProveeduria: ['', [Validators.required, Validators.minLength(2)]],
    //Etapa8
    aPrincObj: ['', [Validators.required, Validators.minLength(2)]],
    // b pendiente
    cPersonaFina: ['', [Validators.required, Validators.minLength(2)]],
    dPresupuesto: ['', [Validators.required, Validators.minLength(2)]],
    eEndeudamiento: ['', [Validators.required, Validators.minLength(2)]],
    fVentasCredito: ['', [Validators.required, Validators.minLength(2)]],
    gApalancamiento: ['', [Validators.required, Validators.minLength(2)]],
    hMinImpA: ['', [Validators.required, Validators.minLength(2)]],
    hMinImpB: ['', [Validators.required, Validators.minLength(2)]],
    hMinImpC: ['', [Validators.required, Validators.minLength(2)]],
    // Etapa9
    aCadenaValor: ['', [Validators.required, Validators.minLength(2)]],
    aCadenaValorPor: ['', [Validators.required, Validators.minLength(2)]],
    // b pendiente
    cVentajaComp: ['', [Validators.required, Validators.minLength(2)]],
    dConsiAli: ['', [Validators.required, Validators.minLength(2)]],
    eConoPort: ['', [Validators.required, Validators.minLength(2)]],
    fCertificaciones: ['', [Validators.required, Validators.minLength(2)]],
    gCertiType: ['', [Validators.required, Validators.minLength(2)]],
    gCertiTypeCuales: ['', [Validators.required, Validators.minLength(2)]],
    hConoceA: ['', [Validators.required, Validators.minLength(2)]],
    hConoceB: ['', [Validators.required, Validators.minLength(2)]],
    hConoceC: ['', [Validators.required, Validators.minLength(2)]],
    hConoceD: ['', [Validators.required, Validators.minLength(2)]],
    hConoce5: ['', [Validators.required, Validators.minLength(2)]],
    hConoce6: ['', [Validators.required, Validators.minLength(2)]],
    hConoce7: ['', [Validators.required, Validators.minLength(2)]],
    hConoce8: ['', [Validators.required, Validators.minLength(2)]],
    hConoce9: ['', [Validators.required, Validators.minLength(2)]],
    hConoce10: ['', [Validators.required, Validators.minLength(2)]],
    iComentariosAdi: ['', [Validators.required, Validators.minLength(2)]],
    file1: ['', Validators.required],
    file2: ['', Validators.required]
  });

  sh: any;
  Preguntas: any = preguntas;
  //Etapa1
  public politicaSi: boolean = false;
  public tienePoliticas: string = '';
  public seguroSi: boolean = false;
  public tieneSeguro: string = '';

  constructor(private fb: FormBuilder, private diagnoServ: ServiceService) { }

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

  createUser() {
    this.formSubmit = true;

    if (this.registerForm.invalid) return;

    this.diagnoServ.crearDiagnostico(this.registerForm.value).subscribe(resp => {
      console.log('diagnostico creado');
      console.log(resp);
    }, (err) => console.warn(err.error));


  }


  validForm(): boolean {

    if (this.registerForm.invalid && this.formSubmit) {
      return true;
    } else {
      return false
    }

  }


  aceptaTermina() {
    //return !this.registerForm.get('').value && this.formSubmit;
  }
}
