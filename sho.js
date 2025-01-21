document.addEventListener('DOMContentLoaded', () => {
    loadCart();

    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', () => {
        checkout();
    });
});

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('sho-items');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>السلة فارغة</p>';
        return;
    }

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="Product Image" style="width: 50%; height:50%; margin: 10px 0;">
            <p>Product ID: ${item.id}</p>
            <p>Price: ${item.price} L.E</p>
            <button class="remove" data-product-id="${item.id}" style="background-color: #ff4d4d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">إزالة</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            removeFromCart(productId);
        });
    });
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('السلة فارغة');
        return;
    }

    // تنفيذ عملية الشراء هنا
    alert('تم إتمام الشراء بنجاح');
    
    // إعادة توجيه المستخدم إلى صفحة الشكر
    window.location.href = 'thankyou.html';

    // تفريغ السلة بعد إتمام الشراء
    localStorage.removeItem('cart');
    loadCart();
}