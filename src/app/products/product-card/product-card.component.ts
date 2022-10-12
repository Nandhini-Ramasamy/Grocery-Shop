import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartserviceService } from '../../cartservice.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product: ProductsComponent;
@Input('show-actions') showActions: true;
@Input('shopping-cart') shoppingCart;
@Input('decreasecount') decreaseCount;
cart$;
  constructor(private cartService: CartserviceService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
  addToCart(){
    this.cartService.addToCart(this.product);
  }

}
