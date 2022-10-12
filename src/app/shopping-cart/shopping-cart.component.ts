import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{
  cart$;
  constructor(private cartService: CartserviceService) { }
  price=20;
  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.cart$.quantity;
  }

  clearCart(){
    this.cartService.clearCart();
  }

  get Price(){
    let totalprice = this.cart$.quantity * this.cart$.item.product.price;
    return totalprice;
    //console.log("price is: "+totalprice);
    //return this.cart$.quantity * this.cart$.item.product.price;
  }

}
