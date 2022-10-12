import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { CartserviceService } from '../cartservice.service';
import { AppUsers } from '../models/app-users';
import { ShoppingCart } from '../models/shopping-cart';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUsers;
  shoppingCartCount: number;
  cart$: Observable<ShoppingCart>;
  constructor(private authservice: AuthService, private cardService: CartserviceService) {
      // authservice.appUser$.subscribe(appUser => this.appUser);
  }

  logout() {
    this.authservice.logout();
  }
  async ngOnInit(){
      //this.authservice.appUser$.subscribe(appUser => this.appUser);
      this.cart$ = await this.cardService.getCart();
  }
}
