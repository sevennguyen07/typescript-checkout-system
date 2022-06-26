import { Product } from "./Product";

export class OrderItem {
    private product: Product;
    private quantity: number;
    
    constructor(product: Product, quantity: number = 1){
        this.product = product;
        this.quantity = quantity;
    }

    get productId(): string {
        return this.product.id;
    }

    get productPrice(): number {
        return this.product.price;
    }

    get qty(): number {
        return this.quantity;
    }

    increaseQty(){
        this.quantity ++;
    }

    get total(): number {
        return this.product.price * this.qty;
    }
}