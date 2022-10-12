import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingordersummaryComponent } from './shippingordersummary.component';

describe('ShippingordersummaryComponent', () => {
  let component: ShippingordersummaryComponent;
  let fixture: ComponentFixture<ShippingordersummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingordersummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingordersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
