let products = [
    {
        name: 'Banana',
        price:15
    },
    {
        name: 'Apple',
        price:10
    },
    {
        name: 'Cherry',
        price:7
    },
    {
        name: 'Strawberry',
        price:15
    },
    {
        name: 'Pineapple',
        price:20
    }
]
let cart = document.getElementById('cart');
let totalPrice = document.getElementById('totalPrice');
let total = Number(totalPrice.textContent);
export function addCart(product) {
    products.forEach((element) => {
        if (element.name === product.textContent) {
            total += element.price;
            totalPrice.textContent = total;
            if (cart.textContent) {
                cart.textContent = cart.textContent + ',' + product.textContent;
            }
            else {
                cart.textContent = product.textContent
            }
        }
    }) 
}