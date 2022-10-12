import { Component, Input } from '@angular/core';

@Component({
  selector: 'shipping-order-summary',
  templateUrl: './shippingordersummary.component.html',
  styleUrls: ['./shippingordersummary.component.css']
})
export class ShippingordersummaryComponent{
  @Input('cart') cart;
}
