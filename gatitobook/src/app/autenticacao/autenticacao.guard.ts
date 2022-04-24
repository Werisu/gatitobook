import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoGuard implements CanLoad {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      if (!this.usuarioService.estaLogado()) {
        this.router.navigateByUrl('');
        return false;
      }
      return true;
  }
}
