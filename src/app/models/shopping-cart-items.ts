
import { ProductsComponent } from "../products/products.component";

export class ShoppingCartItem{
    $key: string;
    title:String;
    imageUrl: string;
    price:number=10;
    quantity: number;
    constructor(init ?: Partial<ShoppingCartItem>){
        Object.assign(this, init);
    }
    get totalPrice(){
        console.log('inside totalprice');
        return 10 * this.quantity;
    }
}