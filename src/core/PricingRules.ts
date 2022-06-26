import { OrderItem } from "./OrderItem";

/**
 * Rule interface to follow by all rules
*/
export interface IRule {
    apply(context: { cart: Map<string, OrderItem>, totalAdjustmentPrice: number }): void;
}

/**
 * Implement for deal rule
 */
export class DealRule implements IRule {
    private ruleInfo;

    constructor(ruleInfo: { productId: string, requiredQuantity: number, freeQuantity: number}){
        this.ruleInfo = ruleInfo;
    }

    apply(context: { cart: Map<string, OrderItem>, totalAdjustmentPrice: number }){
        const item = context.cart.get(this.ruleInfo.productId);

        if(item && item.qty >= this.ruleInfo.requiredQuantity){
            const totalFree: number = Math.floor(item.qty / this.ruleInfo.requiredQuantity) * this.ruleInfo.freeQuantity;
            const totalFreeAmount: number = totalFree * item.productPrice;
            context.totalAdjustmentPrice = -(totalFreeAmount) + context.totalAdjustmentPrice;
        }
    }
}

/**
 * Implement for reduced rule
 */
export class ReducedRule implements IRule{
    private ruleInfo;

    constructor(ruleInfo: { productId: string, requiredQuantity?: number, reducedPrice: number}){
        this.ruleInfo = ruleInfo;
    }

    apply(context: { cart: Map<string, OrderItem>, totalAdjustmentPrice: number }){
        const item = context.cart.get(this.ruleInfo.productId);
        if(item && item.qty >= (this.ruleInfo.requiredQuantity || 1)){
            const totalReducedPrice: number = item.qty * this.ruleInfo.reducedPrice;
            context.totalAdjustmentPrice = (totalReducedPrice - item.total) + context.totalAdjustmentPrice;
        }
    }
}

/**
 * Princing rules configs for all customers
 */
export const PricingRuleConfigs: any = {
    "Microsoft": [
        new DealRule({ productId: 'small_pizza', requiredQuantity: 3, freeQuantity: 1 })
    ],
    "Amazon": [
        new ReducedRule({ productId: 'large_pizza', reducedPrice: 19.99 })
    ],
    "Facebook": [
        new DealRule({ productId: 'medium_pizza', requiredQuantity: 5, freeQuantity: 1 })
    ]
}