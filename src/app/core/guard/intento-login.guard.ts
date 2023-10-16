import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class IntentoLoginGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   
    let token =localStorage.getItem('token')
    if (token == null || token =='') {
      return false
    } else {
      this.router.navigate(['/inicio/home']);
      return true
    }  

  }
}