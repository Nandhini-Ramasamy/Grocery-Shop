import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';
import { Subscription } from 'rxjs';
import { AdminProduct } from '../../models/AdminProducts';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy{
  product: AdminProduct[];
  filteredproducts: any[];
  subscription: Subscription;
  items: AdminProduct[]=[];
  itemcount: number;
  tableResource: DataTableResource<AdminProduct>;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(products =>{
        this.filteredproducts = this.product = products;
        this.initializeTable(this.product);
    });
  }

  private initializeTable(product: AdminProduct[]){
    this.tableResource = new DataTableResource(product);
        this.tableResource.query({offset : 0})
          .then(item => {this.items = item;
        });
        this.tableResource.count()
          .then(itemCount => {
            this.itemcount = itemCount;
        });
  }
  reloadItems(params){
    this.tableResource.query(params)
          .then(item => {this.items = item;
    });
  }
  searchtitle(search: string) {
    console.log(this.filteredproducts);
      return this.filteredproducts = (search) ?
        this.product.filter(p => p.title.toLowerCase().includes(search.toLowerCase())) :
        this.product;
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
