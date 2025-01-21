// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.push');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const productId = button.getAttribute('data-product-id');
//             const price = button.getAttribute('data-price');
//             const image = button.getAttribute('data-image');
//             addToCart(productId, price, image);
//         });
//     });
// });

// function addToCart(productId, price, image) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push({ id: productId, price: price, image: image });
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert('تم إضافة المنتج إلى السلة');
//     window.location.href = 'sho.html';
// }
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.push');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');
            addToCart(productId, price, image);
        });
    });
});

function addToCart(productId, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id: productId, price: price, image: image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('تم إضافة المنتج إلى السلة');
    window.location.href = 'sho.html';
}