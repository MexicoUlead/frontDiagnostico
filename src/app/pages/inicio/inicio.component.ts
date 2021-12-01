import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
//import dign from '../../../';
import Swal from 'sweetalert2';

import preguntas from 'src/assets/json/preguntas.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //  dig: any = dign;
  public formSubmit = false;
  public file1!: File;
  public file2!: File;


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

  constructor(private fb: FormBuilder, private diagnoServ: ServiceService) { }

  ngOnInit(): void {

  }

  createUser() {
    this.formSubmit = true;

    let id: string = '';

    if (this.registerForm.invalid) {
      console.log("no se completaron los datos correctamente")
      Swal.fire('Error', 'no se completaron los datos correctamente', 'error')
    }
    else {
      this.diagnoServ.crearDiagnostico(this.registerForm.value).subscribe((resp: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'diagnostico creado',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(resp);
        id = resp.diagnostico._id
        console.log(id);
        this.diagnoServ.subirFile(this.file1, id, 'file1');
        this.diagnoServ.subirFile(this.file2, id, 'file2');
      }, (err) => { Swal.fire('Error', err.error.msg, 'error') });

    }

  }

  fileUp(event: any) {
    this.file1 = event.target.files[0]
    console.log(this.file1);
  }

  fileUp2(event: any) {
    this.file2 = event.target.files[0]
    console.log(this.file1);
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

  enviarDiagnostico() {
    console.log("funciona")
  }

  //OCULTAR Y MOSTRAR OPCIONES
  //Etapa1
  public politicaSi: boolean = false;
  public tienePoliticas: string = '';
  //etapa 1
  radioChange(event: any) {
    this.tienePoliticas = event.currentTarget.checked;

    if (this.tienePoliticas) {
      this.politicaSi = true;
    } else {
      this.politicaSi = false;
    }
  }
  public seguroSi: boolean = false;
  public tieneSeguro: string = '';
  radioChange2(event: any) {
    this.tieneSeguro = event.currentTarget.checked;

    if (this.tieneSeguro) {
      this.seguroSi = true;
    } else {
      this.seguroSi = false;
    }
  }

  //etapa5
  public modificacionSi: boolean = false;
  public tieneModificacion: string = '';
  modifica(event: any) {
    this.tieneModificacion = event.currentTarget.checked;
    if (this.tieneModificacion) {
      this.modificacionSi = true;
    } else {
      this.modificacionSi = false;
    }
  }


  //inicio
  public mostrarInicio: boolean = true;

  //pasar a etapa 1
  public mostrarEtapa: boolean = false;
  siguienteEtapa(firma: any, autoriza: any) {
    if (firma.trim().length > 0 && autoriza) {
      //console.log(firma.trim(), autoriza)
      this.mostrarInicio = false;
      this.mostrarEtapa = true;
    } else {
      alert("Indicar su firma y marcar autorización");
    }

  }

  //pasar a etapa 2
  public mostrarEtapa2: boolean = false;
  etapa2(nombreEmpresa: any, antiguedad: any, eTipoSociedad: any) {
    if (nombreEmpresa.trim().length > 0
      && antiguedad.trim().length > 0
      && eTipoSociedad.trim().length > 0) {
      this.mostrarEtapa = false;
      this.mostrarEtapa2 = true;
    } else {
      alert("Completar todos los campos");
    }
  }

  //pasar a etapa 3
  public mostrarEtapa3: boolean = false;
  etapa3() {
    this.mostrarEtapa2 = false;
    this.mostrarEtapa3 = true;
  }
  //pasar a etapa 4
  public mostrarEtapa4: boolean = false;
  etapa4(bRasgos: any, cCapacitacion: any) {
    if (bRasgos.trim().length > 0
      && cCapacitacion.trim().length > 0) {
      this.mostrarEtapa3 = false;
      this.mostrarEtapa4 = true;
    } else {
      alert("Completar todos los campos");
    }

  }
  //pasar a etapa 5
  public mostrarEtapa5: boolean = false;
  etapa5() {
    this.mostrarEtapa4 = false;
    this.mostrarEtapa5 = true;
  }
  //pasar a etapa 6
  public mostrarEtapa6: boolean = false;
  etapa6() {
    this.mostrarEtapa5 = false;
    this.mostrarEtapa6 = true;
  }
  //pasar a etapa 7
  public mostrarEtapa7: boolean = false;
  etapa7() {
    this.mostrarEtapa6 = false;
    this.mostrarEtapa7 = true;
  }
  //pasar a etapa 8
  public mostrarEtapa8: boolean = false;
  etapa8() {
    this.mostrarEtapa7 = false;
    this.mostrarEtapa8 = true;
  }
  //pasar a etapa 9
  public mostrarEtapa9: boolean = false;
  etapa9() {
    this.mostrarEtapa8 = false;
    this.mostrarEtapa9 = true;
  }
  //pasar a etapa 10
  public mostrarEtapa10: boolean = false;
  etapa10() {
    this.mostrarEtapa9 = false;
    this.mostrarEtapa10 = true;
  }
}
