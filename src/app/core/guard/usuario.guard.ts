import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  currentUser: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.estaLogueado()) {
      if (state.url.split('/')[1] == 'home') {
        return true;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    return false;
  }
}