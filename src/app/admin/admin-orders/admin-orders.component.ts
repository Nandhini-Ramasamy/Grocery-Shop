import { Component, OnInit } from '@angular/core';
import { Order } from './../../models/order';
import { OrderserviceService } from '../../orderservice.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  order$;
  constructor(private orderService: OrderserviceService) {
    this.order$ = orderService.getOrders();
  }
}
