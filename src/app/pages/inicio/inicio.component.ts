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
    autoriza: ['', [Validators.required, Validators.minLength(1)]],
    antiguedad: ['', [Validators.required, Validators.minLength(2)]],
    typeOrganizacion: ['familiar', [Validators.required, Validators.minLength(2)]],
    dSocio1: ['', [Validators.required, Validators.minLength(2)]],
    dSocio2: ['', [Validators.required, Validators.minLength(2)]],
    dSocio3: ['', [Validators.required, Validators.minLength(2)]],
    eTipoSociedad: ['', [Validators.required, Validators.minLength(2)]],
    fPoliticas: ['', [Validators.minLength(2)]],
    gPoliticasSi: ['', [Validators.minLength(2)]],
    hSeguroEmpresarial: ['', [Validators.minLength(2)]],
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
    aProgramaCrecimiento: [''],
    bRasgos: ['', [Validators.required, Validators.minLength(2)]],
    cCapacitacion: ['', [Validators.required, Validators.minLength(2)]],
    dPlanDeVida: ['', [Validators.required, Validators.minLength(2)]],
    eInduccion: [''],
    ePorque: ['', [Validators.required, Validators.minLength(1)]],
    fMujeres: ['', [Validators.required, Validators.minLength(1)]],
    gHombres: ['', [Validators.required, Validators.minLength(1)]],
    hReactivo: [''],
    fortalezasGeneral: ['', [Validators.required, Validators.minLength(2)]],
    debilidadesGeneral: ['', [Validators.required, Validators.minLength(2)]],
    // Etapa4
    aObjetivos: ['', [Validators.required, Validators.minLength(2)]],
    bFodaTime: ['nunca', [Validators.required, Validators.minLength(2)]],
    bFodaPlanea: ['', [Validators.required, Validators.minLength(2)]],
    bFodaOportunidades: ['', [Validators.required, Validators.minLength(2)]],
    bFodaAmenazas: ['', [Validators.required, Validators.minLength(2)]],
    bFodaEstrategia: ['', [Validators.required, Validators.minLength(2)]],
    cControlGestion: ['', [Validators.required, Validators.minLength(2)]],
    cEsquema: ['', [Validators.minLength(2)]],
    // Etapa5
    aTipoEmpresa: ['maquilador', [Validators.required, Validators.minLength(2)]],
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
    aMercadotecnica: [''],
    bParticipacion: ['', [Validators.required, Validators.minLength(2)]],
    cLineasProd: ['', [Validators.required, Validators.minLength(1)]],
    dProdProm: ['', [Validators.required, Validators.minLength(1)]],
    eRegMar: ['', [Validators.required, Validators.minLength(1)]],
    fProm: ['', [Validators.required, Validators.minLength(2)]],
    gCadenaDis: ['', [Validators.required, Validators.minLength(2)]],
    hEscala: ['', [Validators.required, Validators.minLength(2)]],
    iTipoPublic: ['', [Validators.required, Validators.minLength(2)]],
    jFuerzaVen: [''],
    kTipoDeCapac: ['', [Validators.required, Validators.minLength(2)]],
    lFortalezas: ['', [Validators.required, Validators.minLength(2)]],
    lDebilidades: ['', [Validators.required, Validators.minLength(2)]],
    // etapa7
    aPatentes: ['', [Validators.required, Validators.minLength(2)]],
    bInvProyect: [''],
    cInvUniv: [''],
    dProdCal: [''],
    eProveeduria: [''],
    //Etapa8
    aPrincObj: ['', [Validators.required, Validators.minLength(2)]],
    // b pendiente
    cPersonaFina: ['', [Validators.required, Validators.minLength(2)]],
    dPresupuesto: [''],
    eEndeudamiento: ['', [Validators.required, Validators.minLength(2)]],
    fVentasCredito: [''],
    gApalancamiento: ['', [Validators.required, Validators.minLength(2)]],
    hMinImpA: [''],
    hMinImpB: [''],
    hMinImpC: [''],
    // Etapa9
    aCadenaValor: [''],
    aCadenaValorPor: [''],
    // b pendiente
    cVentajaComp: ['', [Validators.required, Validators.minLength(2)]],
    dConsiAli: ['', [Validators.required, Validators.minLength(2)]],
    eConoPort: ['', [Validators.required, Validators.minLength(2)]],
    fCertificaciones: [''],
    gCertiType: [''],
    gCertiTypeCuales: [''],
    hConoceA: [''],
    hConoceB: [''],
    hConoceC: [''],
    hConoceD: [''],
    hConoce5: [''],
    hConoce6: [''],
    hConoce7: [''],
    hConoce8: [''],
    hConoce9: [''],
    hConoce10: [''],
    iComentariosAdi: [''],
    file1: [''],
    file2: ['']
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
    console.log(this.file1.name);
  }

  fileUp2(event: any) {
    this.file2 = event.target.files[0]
    console.log(this.file2.name);
  }

  fileOrganigrama(event: any) {
    // this.file2 = event.target.files[0]
    // console.log(this.file1);
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
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Indicar su firma y marcar autorización',
      });
      //alert("Indicar su firma y marcar autorización");
    }

  }

  //pasar a etapa 2
  public mostrarEtapa2: boolean = false;
  etapa2(nombreEmpresa: any,
    antiguedad: any,
    dSocio1: any,
    dSocio2: any,
    dSocio3: any,
    eTipoSociedad: any) {
    if (nombreEmpresa.trim().length > 0
      && antiguedad.trim().length > 0
      && eTipoSociedad.trim().length > 0
      && dSocio1.trim().length > 0
      && dSocio2.trim().length > 0
      && dSocio3.trim().length > 0) {
      this.mostrarEtapa = false;
      this.mostrarEtapa2 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 1 (*)',
      });
      //alert("Completar todos los campos");
    }
  }

  //pasar a etapa 3
  public mostrarEtapa3: boolean = false;
  etapa3(aVision: any,
    bMision: any,
    cCreencias: any,
    dValores: any,
    ePrincipios: any,
    fTipoDeLiderazgo: any,
    gEquipoDirectivo: any,
    hLogros: any,
    iProyectos: any,
    fortalezasDirectivo: any,
    debilidadesDirectivo: any) {
    if (aVision.trim().length > 0
      && bMision.trim().length > 0
      && cCreencias.trim().length > 0
      && dValores.trim().length > 0
      && ePrincipios.trim().length > 0
      && fTipoDeLiderazgo.trim().length > 0
      && gEquipoDirectivo.trim().length > 0
      && hLogros.trim().length > 0
      && iProyectos.trim().length > 0
      && fortalezasDirectivo.trim().length > 0
      && debilidadesDirectivo.trim().length > 0) {
      this.mostrarEtapa2 = false;
      this.mostrarEtapa3 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 2 (*)',
      });
    }

  }

  //pasar a etapa 4
  public mostrarEtapa4: boolean = false;
  etapa4(bRasgos: any,
    cCapacitacion: any,
    dPlanDeVida: any,
    ePorque: any,
    fMujeres: any,
    gHombres: any,
    fortalezasGeneral: any,
    debilidadesGeneral: any) {
    if (bRasgos.trim().length > 0
      && cCapacitacion.trim().length > 0
      && dPlanDeVida.trim().length > 0
      && ePorque.trim().length > 0
      && fMujeres.trim().length > 0
      && gHombres.trim().length > 0
      && fortalezasGeneral.trim().length > 0
      && debilidadesGeneral.trim().length > 0) {
      this.mostrarEtapa3 = false;
      this.mostrarEtapa4 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 3 (*)',
      });
    }

  }
  //pasar a etapa 5
  public mostrarEtapa5: boolean = false;
  etapa5(aObjetivos: any,
    bFodaPlanea: any,
    bFodaOportunidades: any,
    bFodaAmenazas: any,
    bFodaEstrategia: any,
    cControlGestion: any) {
    if (aObjetivos.trim().length > 0
      && bFodaPlanea.trim().length > 0
      && bFodaOportunidades.trim().length > 0
      && bFodaAmenazas.trim().length > 0
      && bFodaEstrategia.trim().length > 0
      && cControlGestion.trim().length > 0) {
      this.mostrarEtapa4 = false;
      this.mostrarEtapa5 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 4 (*)',
      });
    }

  }
  //pasar a etapa 6
  public mostrarEtapa6: boolean = false;
  etapa6(bPlantas: any,
    bTamanio: any,
    cLineasPro: any,
    dNumerosEmpleados: any,
    eCapacidadProductiva: any,
    hTecnologia: any,
    iManteyRep: any,
    jMateriaPrima: any,
    kHerramientas: any,
    lSuministroG: any,
    mFortalezas: any,
    mDebilidades: any) {

    if (bPlantas.trim().length > 0
      && bTamanio.trim().length > 0
      && cLineasPro.trim().length > 0
      && dNumerosEmpleados.trim().length > 0
      && eCapacidadProductiva.trim().length > 0
      && hTecnologia.trim().length > 0
      && iManteyRep.trim().length > 0
      && jMateriaPrima.trim().length > 0
      && kHerramientas.trim().length > 0
      && lSuministroG.trim().length > 0
      && mFortalezas.trim().length > 0
      && mDebilidades.trim().length > 0) {

      this.mostrarEtapa5 = false;
      this.mostrarEtapa6 = true;

    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 5 (*)',
      });
    }

  }
  //pasar a etapa 7
  public mostrarEtapa7: boolean = false;
  etapa7(bParticipacion: any,
    cLineasProd: any,
    dProdProm: any,
    eRegMar: any,
    fProm: any,
    gCadenaDis: any,
    hEscala: any,
    iTipoPublic: any,
    kTipoDeCapac: any,
    lFortalezas: any,
    lDebilidades: any) {
    if (bParticipacion.trim().length > 0
      && cLineasProd.trim().length > 0
      && dProdProm.trim().length > 0
      && eRegMar.trim().length > 0
      && fProm.trim().length > 0
      && gCadenaDis.trim().length > 0
      && hEscala.trim().length > 0
      && iTipoPublic.trim().length > 0
      && kTipoDeCapac.trim().length > 0
      && lFortalezas.trim().length > 0
      && lDebilidades.trim().length > 0) {
      this.mostrarEtapa6 = false;
      this.mostrarEtapa7 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 6 (*)',
      });
    }

  }
  //pasar a etapa 8
  public mostrarEtapa8: boolean = false;
  etapa8(aPatentes: any) {
    if (aPatentes.trim().length > 0) {
      this.mostrarEtapa7 = false;
      this.mostrarEtapa8 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 7 (*)',
      });
    }

  }
  //pasar a etapa 9
  public mostrarEtapa9: boolean = false;
  etapa9(aPrincObj: any,
    file1: any,
    cPersonaFina: any,
    eEndeudamiento: any,
    gApalancamiento: any) {
    if (aPrincObj.trim().length > 0
      && file1.length > 0
      && cPersonaFina.trim().length > 0
      && eEndeudamiento.trim().length > 0
      && gApalancamiento.trim().length > 0
    ) {
      this.mostrarEtapa8 = false;
      this.mostrarEtapa9 = true;
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 8 (*)',
      });
    }
  }

  //pasar a etapa 10
  public mostrarEtapa10: boolean = false;
  etapa10(cVentajaComp: any,
    dConsiAli: any,
    eConoPort: any) {
    if (cVentajaComp.trim().length > 0
      && dConsiAli.trim().length > 0
      && eConoPort.trim().length > 0) {
      this.mostrarEtapa9 = false;
      this.mostrarEtapa10 = true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No valido',
        text: 'Completar todos los campos obligatorios de la Etapa 9 (*)',
      });
    }

  }

  //regresar a inicio
  regresarInicio() {
    this.mostrarInicio = true;
    this.mostrarEtapa = false;
  }
  //regresar a etapa 1
  regresarEtapa1() {
    this.mostrarEtapa = true;
    this.mostrarEtapa2 = false;
  }
  //regresar a etapa 2
  regresarEtapa2() {
    this.mostrarEtapa2 = true;
    this.mostrarEtapa3 = false;
  }
  //regresar a etapa 3
  regresarEtapa3() {
    this.mostrarEtapa3 = true;
    this.mostrarEtapa4 = false;
  }
  //regresar a etapa 4
  regresarEtapa4() {
    this.mostrarEtapa4 = true;
    this.mostrarEtapa5 = false;
  }
  //regresar a etapa 5
  regresarEtapa5() {
    this.mostrarEtapa5 = true;
    this.mostrarEtapa6 = false;
  }
  //regresar a etapa 6
  regresarEtapa6() {
    this.mostrarEtapa6 = true;
    this.mostrarEtapa7 = false;
  }
  //regresar a etapa 7
  regresarEtapa7() {
    this.mostrarEtapa7 = true;
    this.mostrarEtapa8 = false;
  }
  //regresar a etapa 8
  regresarEtapa8() {
    this.mostrarEtapa8 = true;
    this.mostrarEtapa9 = false;
  }
  //regresar a etapa 9
  regresarEtapa9() {
    this.mostrarEtapa9 = true;
    this.mostrarEtapa10 = false;
  }
}
