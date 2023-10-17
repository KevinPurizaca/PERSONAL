import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, map, Observable, catchError, throwError } from 'rxjs';
import { ApiCoreService } from 'src/app/core/services/api-core.service';
import { Endpoints } from 'src/app/core/config/endpoints';
import { MessageService } from 'primeng/api';
import { IResponse } from 'src/app/core/interfaces/login.interface';
import { HttpCoreService } from 'src/app/core/services/httpCore.service';
import { ComboModel } from 'src/app/core/util/combo';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private dataMeses$ = new BehaviorSubject<IResponse>({} as IResponse);

  constructor(
    private messageService: MessageService,
    private httpCoreService: HttpCoreService,
  ) { }


  // listarEstado() {
  //   return this.httpCoreService.get(`${Endpoints.GET_PARAM_AUXILIAR}?requestAuxiliar=${PARAMS_AUXILIAR.ESTADO}`).pipe(
  //     catchError((e) => this.HanddleError(e))
  //   );
  // }



  /** Meses */
  // getMeses():Observable<any> {
  //   return this.httpCoreService.get(`${Endpoints.GET_PARAM_AUXILIAR}?requestAuxiliar=${PARAMS_AUXILIAR.MESES}`).pipe(
  //     tap((res:any) => this.dataMeses$.next(res))
  //   );
  // }

  listarMeses() {
   return this.dataMeses$.asObservable();
  }

  private HanddleError(err: any) {
    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: err.message + ' ' + err.innerException, });
    return throwError(err);
  }

  public HanddleErrorMessage(err: any) {
    this.messageService.add({
      key: 'tst',
      severity: 'error',
      summary: 'Error Message',
      detail: err.message + ' ' + err.innerException,
      life: 4000,
    });
  }

  public HanddleErrorMessage2(msg: any) {
    this.messageService.add({
      key: 'tst',
      severity: 'error',
      summary: 'Error Message',
      detail: msg,
      life: 4000,
    });
  }

  public HanddleInfoMessage(msg: any) {
    this.messageService.add({
      key: 'tst',
      severity: 'info',
      summary: 'Confirmado',
      detail: msg,
      life: 4000,
    });
  }

  public HanddleInfoMessage2(res: any) {
    this.messageService.add({
      key: 'tst',
      severity: 'info',
      summary: 'Info',
      detail: res.message,
      life: 4000,
    });
  }

  public CustomMessage(msg: any, tipo = 'error') {
    this.messageService.add({
      key: 'tst2',
      severity: tipo,
      summary: 'Datos incorrectos',
      detail: msg,
      life: 6000
    });
  }

}
