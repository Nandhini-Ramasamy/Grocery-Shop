import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.authservice.user$.map(user$ => {
        if (user$) {
          return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url} });
        return false;
      });
  }
}
