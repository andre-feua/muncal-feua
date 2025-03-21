document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const quantityInput = document.getElementById('quantity');
    const addToCartButton = document.getElementById('addToCart');

    // Rating Functionality
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            stars.forEach(s => {
                if (parseInt(s.dataset.rating) <= rating) {
                    s.classList.add('rated');
                } else {
                    s.classList.remove('rated');
                }
            });
        });
    });

    // Add to Cart Functionality
    addToCartButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        const productName = document.querySelector('h2').textContent;
        const price = parseFloat(document.querySelector('.price').textContent.replace('Php ', '').replace(',', '')); // Remove 'Php ' and commas

        // Store the item in localStorage (or use a server for a real cart)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({
            name: productName,
            quantity: quantity,
            price: price
        });
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Added to cart!'); // Replace with actual cart update logic
    });
});