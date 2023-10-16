import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iif, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpCoreService {

  constructor(
    private http: HttpClient, 
    private router: Router
    ) { }

  public get(collection: string): Observable<any> {
    const url = environment.UrlBase + collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<any[]>(url, httpOptions).pipe(
      tap((data: any) => {

      }),
      catchError(err => {
        return this.EstatusError(err);
      }),
    );
  }

  public post(req: any, collection: string): Observable<any> {
    const jsonrequest = JSON.stringify(req);
    const url = environment.UrlBase + collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<any>(url, jsonrequest, httpOptions).pipe(
      tap((data: any) => {

      }),
      catchError(err => {        
        return this.EstatusError(err);
      }),
    );
  }

  public postFromData(req: any, collection: string, body: FormData): Observable<any> {
    const jsonrequest = JSON.stringify(body);
    const url = environment.UrlBase + collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    //jsonrequest
    return this.http.post<any>(`${url}?${req}`, body, httpOptions).pipe(
      tap((data: any) => {

      }),
      catchError(err => {
        return this.EstatusError(err);
      }),
    );
  }

  public put(req: any, collection: string): Observable<any> {
    const jsonrequest = JSON.stringify(req);
    const url = environment.UrlBase + collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put<any>(url, jsonrequest, httpOptions).pipe(
      tap((data: any) => {

      }),
      catchError(err => {
        return this.EstatusError(err);
      }),
    );
  }

  public delete(collection: string): Observable<any> {
    const url = environment.UrlBase + collection;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.delete<any>(url, httpOptions).pipe(
      tap((data: any) => {

      }),
      catchError(err => {
        return  this.EstatusError(err);
      }),
    );
  }

  EstatusError(err: any): any {
    //debugger;
    if (err.status == 0) {
      console.error('Error, la conexcion con el servidor no es posible: %', err.message+ ' ' + (err.error!=null?err.error.innerException:null));
      throw 'Error, la conexcion con el servidor no es posible: ' + + err.message + ' ' + (err.error!=null?err.error.innerException:null) ;
    }
    if (err.status == 401) {
      console.error('Error, Falta de Autorización: ' + err.message+ ' ' + (err.error!=null?err.error.innerException:null));
      this.router.navigate(['/login']);
      throw 'Error, Falta de Autorización: ' + + err.message + ' ' + (err.error!=null?err.error.innerException:null) ;
     
    }
    if (err.status == 400) {
      console.error('Error, Servicio com Problemas: ' + err.message + ' ' + (err.error!=null?err.error.innerException:null) );
      throw 'Error, Servicio com Problemas: ' +  + err.message + ' ' + (err.error!=null?err.error.innerException:null) ;
    }
    if (err.status == 403) {
      console.error('Error, Falta de permisos para el servicio: ' + err.message+ ' ' + (err.error!=null?err.error.innerException:null));
      throw 'Error, Falta de permisos para el servicio: ' + + err.message + ' ' + (err.error!=null?err.error.innerException:null) ;
    }
    throw 'Error in source. Details: ' + err.error;
   // return  err.error;

  }

}