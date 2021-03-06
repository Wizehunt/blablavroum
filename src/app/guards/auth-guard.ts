import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

  /**
   * Pour pages demandant d'être loggé : renvoie l'user sur /login si non loggés
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (Cookie.get('mail')) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
