import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';
import { AdminProduct } from './models/AdminProducts';
import { ShoppingCart } from './models/shopping-cart';
import { ShoppingCartItem } from './models/shopping-cart-items';
import { ProductsComponent } from './products/products.component';
@Injectable()
export class CartserviceService {

  constructor(private db: AngularFireDatabase) { }
  
  async addToCart(product: ProductsComponent) {
    console.log('product: '+product);
    this.updateItem(product, 1);
  }

  async removeFromCart(product: ProductsComponent) {
    console.log('product: '+product);
    this.updateItem(product, -1);
  }
  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCart();
      return this.db.object('/shopping-carts/' + cartId)
      .map(x => new ShoppingCart(x.items));
  }
  async clearCart(){
    
    let cartid = await this.getOrCreateCart();
    console.log('Inside clearcart: '+cartid);
    this.db.object('/shopping-carts/' + cartid + '/items').remove();
  }


  private create() {
    return this.db.list('/shopping-carts').push({
        dateCreated : new Date(),
    });

  }
  private getItem(cartId: String, productId: String){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  public async getOrCreateCart():Promise<String> {
    let cartid = localStorage.getItem('cartId');
    if (!cartid) {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
          return result.key;
     /* this.create().then(result => {
          localStorage.setItem('cartId', result.key);
          return this.getCart(result.key);
      });*/
    }
    return cartid;
  }
  

  private async updateItem(product: ProductsComponent, change: number) {
    let cartId = await this.getOrCreateCart();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      let quantity = (item.quantity || 0 ) + change;
      if (quantity ===0 )
          item$.remove();
      else item$.update({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity:quantity
      });
    });
  }
}
