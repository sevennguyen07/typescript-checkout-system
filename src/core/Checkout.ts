import { OrderItem } from "./OrderItem";
import { Product, ProductStore } from "./Product";
import { IRule, PricingRuleConfigs } from "./PricingRules";

export class Checkout{
    private cart: Map<string, OrderItem>;
    private pricingRules: IRule[];

    constructor(customer: string){
        this.cart = new Map<string, OrderItem>();
        this.pricingRules = PricingRuleConfigs[customer] || [];
    }

    add(productId: string){
        const item = this.cart.get(productId);

        if (item){
            //This item already exists in the cart --> increase item quantity
            item.increaseQty();
        } else {
            // Add this item to the cart
            const product = ProductStore.find(p => p.id === productId);
            if(product){
                this.cart.set(productId, new OrderItem(product, 1));
            } else {
                throw new Error("Product not found");
            }
        }
    }

    totalOriginalPrice(): number{
        const items = Array.from(this.cart.values());
        return items.reduce((sum, item) => sum + item.total, 0);
    }

    total(): number {
        /**
        * This context variable to hold all items in shopping cart 
        * and total adjustment price is applied by all pricing rules for this customer
        */
        const context =  {
            cart: this.cart,
            totalAdjustmentPrice: 0
        }

        /**
         * apply all pricing rules
         */
        for (const rule of this.pricingRules) rule.apply(context)

        return Number((this.totalOriginalPrice() + context.totalAdjustmentPrice).toFixed(2));
    }
}