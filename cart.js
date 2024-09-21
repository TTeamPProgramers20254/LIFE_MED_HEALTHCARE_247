document.addEventListener('DOMContentLoaded', function() {
    const cartTableBody = document.querySelector('#cart-table-body');
    const cartTotal = document.getElementById('cart-total');

    // Function to load cart items
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        // Clear existing cart items
        cartTableBody.innerHTML = '';

        // Populate cart items
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            const itemTotal = parseFloat(item.price); // Assuming quantity is always 1
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>1</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove" data-index="${index}">Remove</button></td>
            `;
            cartTableBody.appendChild(row);
            total += itemTotal;
        });

        // Update total price
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

        // Attach remove event listeners
        document.querySelectorAll('.remove').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // Function to remove item from cart
    function removeItem(event) {
        const index = event.target.getAttribute('data-index');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    // Load cart items on page load
    loadCart();
});
