import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CartserviceService } from '../cartservice.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products;
  filteredProducts: ProductsComponent[] = [];
  category;
  title;
  imageUrl;
  price;
  $key: string;
  cart$: Observable<ShoppingCart>;
  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private cartService: CartserviceService
    ) {
    
  }
  
  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.productsFilter();
  }
  
  private productsFilter(){
    this.productservice.getAll()
    .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
    }).subscribe(c => {
          this.category = c.get('category');
          this.applyFilter();
      });
  }
  private applyFilter(){
    this.filteredProducts = (this.category) ?
    this.products.filter( p => p.category  === this.category) :
    this.products;
}
}
