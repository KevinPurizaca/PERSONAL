import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, ViewChild } from "@angular/core";
import { catchError, Observable, tap, BehaviorSubject, Subscription, interval } from "rxjs";
//import { JwtHelperService } from "@auth0/angular-jwt";

import { Endpoints } from "../config/endpoints";
import { Router } from "@angular/router";
import { HttpCoreService } from "./httpCore.service";
import { ConfirmationService } from 'primeng/api';

@Injectable()
export class AuthenticationService {

  //private jwtHelper = new JwtHelperService();
  public tokenRenovado = new BehaviorSubject(false)

  constructor(
    private router: Router,
    private httpCoreService: HttpCoreService,
    private confirmationService: ConfirmationService,
  ) { }

  estaLogueado(): boolean {
    let token:any= localStorage.getItem('token');
    if (token == null || token=='') {
      return false;
    } else {
       //const isExpired = this.jwtHelper.isTokenExpired(token);
      // this.isVerificaTiempo(token);
       //if (isExpired) {
        localStorage.setItem('token', '');
        return false;
      // } else {
      //   return true;
      //  }
    }
  }

  logIn(data: any) {
    return this.httpCoreService.post(data, Endpoints.LOGIN).pipe(
      tap((res: any) => {
        if (res.isSuccess) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('menu', JSON.stringify(res.data.menu));
          localStorage.setItem('userdata', JSON.stringify(res.data));
        }
      })
    );
  }

  // passwordRecover(data: any) {
  //   return this.httpCoreService.post(data, Endpoints.PASS_RECOVER).pipe();
  // }

  logOut() {
   // this.router.navigate(['/login']);
    localStorage.clear();
    sessionStorage.clear();
    
  }

  // verifyTokenAndLogout() {
  //   if (this.esTokenExpirado()) {
  //     this.logOut();
  //   }
  // }

  /**
   * Este metodo sirve para verificar si el token ha sido renovado en caso que el usuario 
   * tenía varias pestañas abiertas pero renovó su token al logearse desde cualquiera de las pestañas
   */
  // esTokenExpirado(): boolean {
  //   let token :any= localStorage.getItem('token');
  //   if (token == null || token == '' ) {
  //     return true;      
  //   } else {
  //       //const isExpired = this.jwtHelper.isTokenExpired(token);
  //       //this.isVerificaTiempo(token);

  //     //  if (isExpired) {
  //       //localStorage.setItem('token', '');
  //       return false;
  //     // } else {
  //     //   return true;
  //     // }
  //   }
  // }

  isVerificaTiempo(token:any)
  {
    const jwtToken = JSON.parse(atob(token.split('.')[1]));
       const expires = new Date(jwtToken.exp * 1000);
       const timeout = expires.getTime() - Date.now();  
      }

}