import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppUsers } from './models/app-users';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  save(user: firebase.User) {
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        emailId: user.email
      });
  }

  get(uid: string): FirebaseObjectObservable<AppUsers> {
    return this.db.object('/users/' + uid );
  }
}
