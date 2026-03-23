export function discount(total, disc) {
    let price = total - (total * disc) / 100;
    document.getElementById('totalPrice').textContent = price;
}