import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule  } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthguardService } from './authguard.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CartserviceService } from './cartservice.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderserviceService } from './orderservice.service';
import { ShippingordersummaryComponent } from './shippingordersummary/shippingordersummary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShippingordersummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthguardService]},
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthguardService]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthguardService] },

      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthguardService] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthguardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthguardService] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthguardService] }
    ])
  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService,
    CategoryService,
    ProductService,
    CartserviceService,
    OrderserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
