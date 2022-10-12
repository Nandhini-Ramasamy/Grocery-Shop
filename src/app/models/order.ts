import { ShoppingCart } from "./shopping-cart";


export class Order{
    datePlaced:Date;
    items: any[];
    constructor(shoppingCart: ShoppingCart, public userId: String, public shipping: any){
        this.datePlaced = new Date();
        this.items = shoppingCart.items.map(items => {
            return{
              product : {
                  title: items.title,
                  imageUrl:items.imageUrl,
                  price: items.price
              },
              quantity: items.quantity,
              totalPrice: items.totalPrice
            }
        })
    }
}