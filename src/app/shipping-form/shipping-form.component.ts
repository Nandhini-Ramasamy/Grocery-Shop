import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart;
  shipping= {};
  userId: string;
  userSubscription: Subscription;
  constructor(
    private orderService: OrderserviceService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(userId => this.userId = userId.uid);
  }

  async placeOrder(){
    let order = new Order(this.cart,this.userId,this.shipping);
    await this.orderService.placeOrder(order);
  }
}
