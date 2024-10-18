import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';// Servicio que maneja la autenticación
import { TokenService } from './usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
