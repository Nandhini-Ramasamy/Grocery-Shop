import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartserviceService } from './cartservice.service';

@Injectable()
export class OrderserviceService {

  constructor(private db: AngularFireDatabase,private cart: CartserviceService,
    private router: Router) { }


  async placeOrder(order){
    let result = await this.db.list('/orders').push(order);
    this.cart.clearCart();
    this.router.navigate(['/order-success',result.key]);
  }

  getOrders(){
    return this.db.list('/orders');
  }

  getOrdersBasedOnUser(userId: String){
    console.log('user list');
      return this.db.list('/orders',{
        query:{
          orderByChild: 'userId'
        }
      });
  }
}
