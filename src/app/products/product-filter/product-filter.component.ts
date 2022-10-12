import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') categories;
  constructor(categories: CategoryService) { 
    this.categories$ = categories.getCategories();
  }

  ngOnInit() {
  }

}

