export type Product = {
    id: string,
    name: string,
    price: number
}

export const ProductStore: Product[] = [
    {
        id: 'small_pizza',
        name: 'Small Pizza',
        price: 11.99
    },
    {
        id: 'medium_pizza',
        name: 'medium Pizza',
        price: 15.99
    },
    {
        id: 'large_pizza',
        name: 'Large Pizza',
        price: 21.99
    }
]