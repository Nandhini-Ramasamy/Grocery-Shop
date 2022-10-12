import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppUsers } from './models/app-users';
import { UserService } from './user.service';
@Injectable()
export class AuthService {
  returnUrl: any;
  user$: Observable<firebase.User>;
  appUser$: any;
  constructor(
    private afauth: AngularFireAuth, private auth: Router, private activatedroute: ActivatedRoute) {
    this.user$ = this.afauth.authState;
  }

  login() {
    console.log('Inside login');
    this.returnUrl = this.activatedroute.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', this.returnUrl);
    return this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afauth.auth.signOut();
    this.auth.navigate(['/']);
  }
}
