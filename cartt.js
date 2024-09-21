document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Function to add item to cart
    function addToCart(event) {
        const button = event.target;
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add new item to the cart
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} has been added to your cart.`);
    }

    // Attach event listeners
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
