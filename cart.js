document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const updateCartButton = document.getElementById('update-cart');
    const proceedCheckoutButton = document.getElementById('proceed-checkout');

    // Function to load and display cart items
    function loadCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = ''; // Clear previous items
        let total = 0;

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            row.innerHTML = `
                <td>${item.name}</td>
                <td>₱${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" data-index="${index}"></td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
                <td>₱${itemTotal.toFixed(2)}</td>
            `;
            cartItemsContainer.appendChild(row);
        });

        cartTotalElement.textContent = `₱${total.toFixed(2)}`;
    }

    // Load cart items on page load
    loadCartItems();

    // Event delegation for remove button and quantity input
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = parseInt(event.target.dataset.index);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1); // Remove item from cart
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
        }
    });

    cartItemsContainer.addEventListener('change', (event) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'number') {
            const index = parseInt(event.target.dataset.index);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart[index].quantity = parseInt(event.target.value); // Update quantity
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
        }
    });

    // Update Cart button (you can add functionality here)
    updateCartButton.addEventListener('click', () => {
        // Implement update cart logic if needed
        alert('Cart updated (if you implemented logic)!');
    });

    // Proceed Checkout button (you can add functionality here)
    proceedCheckoutButton.addEventListener('click', () => {
        // Implement checkout logic if needed
        alert('Proceeding to checkout (if you implemented logic)!');
    });
});