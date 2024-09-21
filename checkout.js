document.addEventListener('DOMContentLoaded', function() {
    const orderItems = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    // Populate order summary
    cart.forEach(item => {
        const row = document.createElement('tr');
        const itemTotal = parseFloat(item.price) * 1; // Assuming quantity is always 1 for simplicity
        total += itemTotal;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${parseFloat(item.price).toFixed(2)}</td>
            <td>1</td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;
        orderItems.appendChild(row);
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;

    document.getElementById('proceed-payment').addEventListener('click', function() {
        // Check if user is logged in
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('Please log in or sign up to proceed with the payment.');
            window.location.href = 'login.html'; // Redirect to login page
            return;
        }

        // Payment handling logic
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        const message = `Your transaction is done. Amount paid: $${total.toFixed(2)} using ${paymentMethod}.`;
        document.getElementById('transaction-message').textContent = message;

        // Optionally clear cart after payment
        localStorage.removeItem('cart');
    });
});
