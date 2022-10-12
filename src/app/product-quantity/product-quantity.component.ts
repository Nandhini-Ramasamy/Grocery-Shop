import { Component, Input, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: ProductsComponent;
  @Input('shopping-cart') shoppingCart;
  @Input('decreasecount') decreaseCount;
  cart$;
    constructor(private cartService: CartserviceService) { }
  
    /*async ngOnInit() {
      this.cart$ = await this.cartService.getCart();
    }*/
    addToCart(){
      this.cartService.addToCart(this.product);
    }
  
    removeFromCart() {
      this.cartService.removeFromCart(this.product);
    }
    getQuantity() {
      if (!this.shoppingCart) return 0;
      
      let item = this.shoppingCart.items[this.product.$key];
      console.log('Item is: ' + item);
      return item ? item.quantity : 0;
    }
}
