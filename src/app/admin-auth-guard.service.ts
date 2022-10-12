import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUsers } from './models/app-users';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private authservice: AuthService, private userservice: UserService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.authservice.appUser$
      .switchMap(user => this.userservice.get(user.uid))
      .map(appUser => appUser.isAdmin);
      //this.router.navigate(['/login'], {queryParams: {returnUrl: state.url} });
}
}