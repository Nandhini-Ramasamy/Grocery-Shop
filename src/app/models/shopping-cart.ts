import { ProductsComponent } from "../products/products.component";
import { ShoppingCartItem } from "./shopping-cart-items";

export class ShoppingCart {
    
    items: ShoppingCartItem[] = [];
    constructor(private itemsMap: {  [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem({
                ...item,
                $key: productId
            }));
        }
    }

    getQuantity(product: ProductsComponent) {
         let item = this.itemsMap[product.$key];
         console.log('Item is: ' + item);
         return item ? item.quantity : 0;
       }

    get totalPrice(){
        let sum=0.00;
        for (let productId in this.items)
            sum += this.items[productId].price;
        return sum;
    }

    get totalItemsCount(){
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
}