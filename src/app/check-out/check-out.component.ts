import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { CartserviceService } from '../cartservice.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  cart$:Observable<ShoppingCart>;
  constructor(private cartService:CartserviceService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
}
