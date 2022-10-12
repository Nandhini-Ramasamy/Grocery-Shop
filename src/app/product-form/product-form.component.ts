import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$;
  product = {};
  id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productservice: ProductService,
    categoryservice: CategoryService) {
     this.category$ = categoryservice.getCategories();
      this.id = this.route.snapshot.paramMap.get('id');
     if (this.id) {
       this.productservice.get(this.id).take(1).subscribe(p => {this.product = p;});
     }
  }

  save(product) {
      if (this.id) {
        this.productservice.update(this.id, product);
      }
      else {
        this.productservice.create(product);
      }
      this.router.navigate(['/admin/products/']);
  }
  delete(id){
      console.log('id is: ' + id);
      this.productservice.delete(this.id);
      this.router.navigate(['/admin/products/']);
  }
  ngOnInit() {
  }
}
