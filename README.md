## Description

- The core checkout module that support to caculates the total of all item by applying customer specific pricing rules. 
- Tech stack: Typescript, mocha, chai

## Project structure
- **src/core**: Contains all the core files for checkout module
  -  **Checkout**: Implementation of checkout system that caculates the total of all items with customer specific pricing rules.
  -  **OrderItem**: Class contains information about a single item on a customer order
  -  **PrincingRules**: Contains configs of pricing rules for all customers and the implementation for each rule.
  -  **Product**: Define the proudct data type and all products of store
- **src/test**: Contains all test files

## Using
```bash
Checkout co = new Checkout(pricingRules)
co.add(item1)
co.add(item2)
co.total()
```

## Testing
```bash
$ npm run test

```
