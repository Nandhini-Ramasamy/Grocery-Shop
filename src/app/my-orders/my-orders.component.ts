import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OrderserviceService } from '../orderservice.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent{
order$;

  constructor(
    private authservice: AuthService,
    private orderservice: OrderserviceService,) {
    
      this.order$ = authservice.user$.switchMap(userId => orderservice.getOrdersBasedOnUser(userId.uid));
      console.log('order of user : '+this.order$);
  }
  
}
