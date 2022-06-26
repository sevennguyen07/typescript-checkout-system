import { expect } from 'chai';
import { Checkout } from '../core/Checkout'

describe('Core tests', () => { // the tests container
    it('Should return correct total for default customer', () => {
        const checkout = new Checkout('default');
        checkout.add('small_pizza');
        checkout.add('medium_pizza');
        checkout.add('large_pizza');
        expect(checkout.total()).to.equal(49.97);
        
    })

    it('Should return correct total for Microsoft customer', () => {
        const checkout = new Checkout('Microsoft');
        checkout.add('small_pizza');
        checkout.add('small_pizza');
        checkout.add('small_pizza');
        checkout.add('large_pizza');
        expect(checkout.total()).to.equal(45.97);
    })

    it('Should return correct total for Amazon customer', () => {
        const checkout = new Checkout('Amazon');
        checkout.add('medium_pizza');
        checkout.add('medium_pizza');
        checkout.add('medium_pizza');
        checkout.add('large_pizza');
        expect(checkout.total()).to.equal(67.96);
    })

    it('Should return correct total for Facebook customer', () => {
        const checkout = new Checkout('Facebook');
        checkout.add('small_pizza');
        checkout.add('medium_pizza');
        checkout.add('medium_pizza');
        checkout.add('medium_pizza');
        checkout.add('medium_pizza');
        checkout.add('medium_pizza');
        checkout.add('large_pizza');
        expect(checkout.total()).to.equal(97.94);
    })
});