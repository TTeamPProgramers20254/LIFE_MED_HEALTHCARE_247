document.addEventListener('DOMContentLoaded', function() {
    const medicineList = document.getElementById('medicine-list');

    // Sample data - replace with actual data or API
    const medicines = [
        { id: 1, name: 'Medicine A', price: 10 },
        { id: 2, name: 'Medicine B', price: 15 },
        { id: 3, name: 'Medicine C', price: 20 },
    ];

    medicines.forEach(medicine => {
        const medicineDiv = document.createElement('div');
        medicineDiv.innerHTML = `
            <h3>${medicine.name}</h3>
            <p>Price: $${medicine.price}</p>
            <button onclick="addToCart(${medicine.id})">Add to Cart</button>
        `;
        medicineList.appendChild(medicineDiv);
    });
});

function addToCart(medicineId) {
    // Logic to add medicine to cart (localStorage or IndexedDB)
    alert('Added to cart: ' + medicineId);
}
