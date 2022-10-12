import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  returnUrl: any;
  constructor(private userservice: UserService, private authservice: AuthService, private router: Router){
    this.authservice.user$.subscribe( user => {
        if (user) {
          this.userservice.save(user);
          return true;
        }
        this.returnUrl = localStorage.getItem('returnUrl');
        console.log('return url at app : ' + this.returnUrl);
        return this.router.navigateByUrl(this.returnUrl);
    });
  }
}
