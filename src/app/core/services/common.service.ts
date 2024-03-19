import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { PARAMS_AUXILIAR, opcionesDeFormatoFecha } from 'src/app/core/config/options';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private messageService: MessageService
  ) { }

  tiempoVidaNotificacion:number = 1500;
  private HanddleError(err: any) {
    this.messageService.add({
       key: 'tst', 
       severity: 'error',
        summary: 'Error Message',
         detail: err.Message , 
      });
    return throwError(err);
  }

  public HanddleErrorMessage(err: any) {
    this.messageService.add({
      key: 'tst',
      severity: 'error',
      summary: err.message ,//'Error Message',
      detail:  err.innerException ,
      closable:false,
      life: this.tiempoVidaNotificacion,
    });
  }

  // public HanddleErrorMessage2(msg: any) {
  //   this.messageService.add({
  //     key: 'tst',
  //     severity: 'error',
  //     summary: 'Error Message',
  //     detail: msg,
  //     closable:false,
  //     life: this.tiempoVidaNotificacion,
  //   });
  // }
  public HanddleInfoMessage(msg: any) {
    this.messageService.add({
      key: 'tst',
      severity: 'info',
      summary: 'Confirmado',
      detail: msg,
      closable:false,
      life: this.tiempoVidaNotificacion,
    });
  }

  // public HanddleInfoMessage2(res: any) {
  //   this.messageService.add({
  //     key: 'tst',
  //     severity: 'info',
  //     summary: 'Info',
  //     detail: res.Message,
  //     closable:false,
  //     life: this.tiempoVidaNotificacion,
  //   });
  // }

  public CustomMessage(msg: any, tipo = 'error') {
    this.messageService.add({
      key: 'tst2',
      severity: tipo,
      summary: 'Datos incorrectos',
      detail: msg,
      closable:false,
      life: this.tiempoVidaNotificacion
    });
  }


  public formatearFecha(fecha: Date): string {  
    const formatoFecha = new Intl.DateTimeFormat('es-PE', opcionesDeFormatoFecha);
    return formatoFecha.format(fecha);
  }

  
  
}
