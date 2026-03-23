import { addCart } from './cart.js';
import { discount } from './discount.js';

document.getElementById('list').addEventListener('click', event => {
    if (event.target.id === 'add') {
        let li = event.target.closest('li');
        let product = li.querySelector('#name');
        addCart(product);
    }
});
document.getElementById('discount').addEventListener('submit', event => {
    event.preventDefault();
    let input = document.getElementById('discountNumber');
    let totalPrice = document.getElementById('totalPrice');
    
    discount(Number(totalPrice.textContent), input.value);
})
