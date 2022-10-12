import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }


  create(product: string){
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId: string, product: string) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId){
    console.log('inside delete');
    return this.db.list('/products/').remove(productId);
  }
}
