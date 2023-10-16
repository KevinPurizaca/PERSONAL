import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {
  private URLBASE = environment.UrlBase;
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get<T>(path: string, params: HttpParams, headers?: HttpHeaders): Observable<any>
  get<T>(path: string, params?: HttpParams, headers?: {}): Observable<any>
  get<T>(path: string, params?: {}, headers?: {}): Observable<any> {
    const URL = this.URLBASE + path;
    
    return this.http.get<any>(URL, { params, headers: headers ? headers : {} })
      .pipe(
        catchError(error => this.HandleError(error)),
      );
  }

  post<T>(path: string, body: any): Observable<any>
  post<T>(path: string, body: any, headers?: {}, params?: {}): Observable<any>
  post<T>(path: string, body: any, headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    const URL = this.URLBASE + path;
    
    return this.http.post<any>(URL, body, { headers, params })
      .pipe(
        catchError(error => this.HandleError(error)),
      );
  }

  put<T>(path: string, body: any, headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    const URL = this.URLBASE + path;
    
    return this.http.put<any>(URL, body, { headers, params })
      .pipe(
        catchError(error => this.HandleError(error))
      );
  }

  delete<T>(path: string, headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    const URL = this.URLBASE + path;
    
    return this.http.delete<any>(URL, { headers, params })
      .pipe(
        catchError(error => this.HandleError(error))
      );
  }


  HandleError(err: any): any {
   // debugger;
    if (err.status == 0) {
      console.error('Error, la conexión con el servidor no es posible: %', err.message);
      throw 'Error, la conexcion con el servidor no es posible: ' + err.toString();
    }
    if (err.status == 401) {
      console.error('Error, Falta de Autorización: ' + err.message);
     
      throw 'Error, Falta de Autorización: ' + err;
      //this.router.navigate(['/login']);
      
    }
    if (err.status == 400) {
      console.error('Error, Servicio con Problemas: ' + err.message);
      throw 'Error, Servicio con Problemas: ' + err;
    }
    if (err.status == 403) {
      console.error('Error, Falta de permisos para el servicio: ' + err.message);
      throw 'Error, Falta de permisos para el servicio: ' + err;
    }
    throw 'Error in source. Details: ' + err;
  }

}
